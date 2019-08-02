/* global artifacts, contract */
const assert = require('assert')
const BN = require('bignumber.js')

const Market = artifacts.require('Market')

const { SECONDS_IN_DAY } = require('@airswap/order-utils').constants
const {
  equal,
  reverted,
  emitted,
  passes,
} = require('@airswap/test-utils').assert
const {
  getTimestampPlusDays,
  advanceTimeAndBlock,
  takeSnapshot,
  revertToSnapShot,
} = require('@airswap/test-utils').time
const { intents } = require('@airswap/indexer-utils')

const ALICE_LOC = intents.serialize(
  intents.Locators.INSTANT,
  '0x3768a06fefe82e7a20ad3a099ec4e908fba5fd04'
)
const BOB_LOC = intents.serialize(
  intents.Locators.CONTRACT,
  '0xbb58285762f0b56b6a206d6032fc6939eb26f4e8'
)
const CAROL_LOC = intents.serialize(
  intents.Locators.URL,
  'https://rpc.maker-cloud.io:80'
)

const NULL_LOCATOR = '0x'.padEnd(66, '0')

contract('Market', async accounts => {
  let owner = accounts[0]
  let nonOwner = accounts[1]
  let aliceAddress = accounts[1]
  let bobAddress = accounts[2]
  let carolAddress = accounts[3]
  let davidAddress = accounts[4]
  let eveAddress = accounts[4]

  let mockTokenOne = accounts[8]
  let mockTokenTwo = accounts[8]

  let snapshotId
  let market

  // linked list helpers
  const LIST_HEAD = '0xFFfFfFffFFfffFFfFFfFFFFFffFFFffffFfFFFfF'
  const LIST_PREV = '0x00'
  const LIST_NEXT = '0x01'
  const STAKER = 'staker'
  const AMOUNT = 'amount'
  const EXPIRY = 'expiry'
  const LOCATOR = 'locator'

  beforeEach(async () => {
    let snapShot = await takeSnapshot()
    snapshotId = snapShot['result']
  })

  afterEach(async () => {
    await revertToSnapShot(snapshotId)
  })

  before('Setup', async () => {
    market = await Market.new(mockTokenOne, mockTokenTwo, { from: owner })
  })

  async function checkLinking(staker, nextStaker, prevStaker) {
    let actualNextStaker = (await market.intentsLinkedList(
      staker,
      LIST_NEXT
    ))[STAKER]
      let actualPrevStaker = (await market.intentsLinkedList(
        staker,
        LIST_PREV
      ))[STAKER]
      equal(actualNextStaker, nextStaker, "Next staker not set correctly")
      equal(actualPrevStaker, prevStaker, "Prev staker not set correctly")
  }

  describe('Test constructor', async () => {
    it('should set maker token', async () => {
      const actualMakerToken = await market.makerToken()
      equal(actualMakerToken, mockTokenOne, 'Maker token set incorrectly')
    })

    it('should set taker token', async () => {
      const actualTakerToken = await market.takerToken()
      equal(actualTakerToken, mockTokenTwo, 'Taker token set incorrectly')
    })

    it('should setup the linked list as just a head, length 0', async () => {
      await checkLinking(LIST_HEAD, LIST_HEAD, LIST_HEAD)

      let listLength = await market.length()
      equal(listLength, 0, 'Link list length should be 0')
    })
  })

  describe('Test setIntent', async () => {
    it('should not allow a non owner to call setIntent', async () => {
      await reverted(
        market.setIntent(
          aliceAddress,
          2000,
          await getTimestampPlusDays(3),
          ALICE_LOC,
          { from: nonOwner }
        ),
        'Ownable: caller is not the owner'
      )
    })

    it('should allow an intent to be inserted by the owner', async () => {
      let intentExpiry = await getTimestampPlusDays(3)
      // set an intent from the owner
      let result = await market.setIntent(
        aliceAddress,
        2000,
        intentExpiry,
        ALICE_LOC,
        { from: owner }
      )

      // check the SetIntent event was emitted
      emitted(result, 'SetIntent', event => {
        return (
          event.staker === aliceAddress &&
          event.amount.toNumber() === 2000 &&
          event.expiry.toNumber() === intentExpiry &&
          event.locator === ALICE_LOC &&
          event.makerToken === mockTokenOne &&
          event.takerToken === mockTokenTwo
        )
      })

      // check it has been inserted into the linked list correctly

      // check its been linked to the head correctly
      await checkLinking(LIST_HEAD, aliceAddress, aliceAddress)
      await checkLinking(aliceAddress, LIST_HEAD, LIST_HEAD)

      // check the values have been stored correctly
      let headNextIntent = await market.intentsLinkedList(LIST_HEAD, LIST_NEXT)

      equal(headNextIntent[STAKER], aliceAddress, 'Intent address not correct')
      equal(headNextIntent[AMOUNT], 2000, 'Intent amount not correct')
      equal(headNextIntent[EXPIRY], intentExpiry, 'Intent expiry not correct')
      equal(headNextIntent[LOCATOR], ALICE_LOC, 'Intent locator not correct')

      // check the length has increased
      let listLength = await market.length()
      equal(listLength, 1, 'Link list length should be 1')
    })

    it('should insert subsequent intents in the correct order', async () => {
      let intentExpiry = await getTimestampPlusDays(2)
      // set an intent from the owner
      let result = await market.setIntent(
        bobAddress,
        500,
        intentExpiry,
        BOB_LOC,
        { from: owner }
      )

      // check the SetIntent event was emitted
      emitted(result, 'SetIntent', event => {
        return (
          event.staker === bobAddress &&
          event.amount.toNumber() === 500 &&
          event.expiry.toNumber() === intentExpiry &&
          event.locator === BOB_LOC &&
          event.makerToken === mockTokenOne &&
          event.takerToken === mockTokenTwo
        )
      })
    })
  })
})
