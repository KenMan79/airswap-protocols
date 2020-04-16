// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class User extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save User entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save User entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("User", id.toString(), this);
  }

  static load(id: string): User | null {
    return store.get("User", id) as User | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get authorizedSigners(): Array<string> {
    let value = this.get("authorizedSigners");
    return value.toStringArray();
  }

  set authorizedSigners(value: Array<string>) {
    this.set("authorizedSigners", Value.fromStringArray(value));
  }

  get authorizedSenders(): Array<string> {
    let value = this.get("authorizedSenders");
    return value.toStringArray();
  }

  set authorizedSenders(value: Array<string>) {
    this.set("authorizedSenders", Value.fromStringArray(value));
  }

  get executedOrders(): Array<string> {
    let value = this.get("executedOrders");
    return value.toStringArray();
  }

  set executedOrders(value: Array<string>) {
    this.set("executedOrders", Value.fromStringArray(value));
  }

  get cancelledNonces(): Array<BigInt> {
    let value = this.get("cancelledNonces");
    return value.toBigIntArray();
  }

  set cancelledNonces(value: Array<BigInt>) {
    this.set("cancelledNonces", Value.fromBigIntArray(value));
  }
}

export class SwapContract extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save SwapContract entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save SwapContract entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("SwapContract", id.toString(), this);
  }

  static load(id: string): SwapContract | null {
    return store.get("SwapContract", id) as SwapContract | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }
}

export class ExecutedOrder extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save ExecutedOrder entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save ExecutedOrder entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("ExecutedOrder", id.toString(), this);
  }

  static load(id: string): ExecutedOrder | null {
    return store.get("ExecutedOrder", id) as ExecutedOrder | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get swap(): string {
    let value = this.get("swap");
    return value.toString();
  }

  set swap(value: string) {
    this.set("swap", Value.fromString(value));
  }

  get from(): Bytes | null {
    let value = this.get("from");
    if (value === null) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set from(value: Bytes | null) {
    if (value === null) {
      this.unset("from");
    } else {
      this.set("from", Value.fromBytes(value as Bytes));
    }
  }

  get to(): Bytes | null {
    let value = this.get("to");
    if (value === null) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set to(value: Bytes | null) {
    if (value === null) {
      this.unset("to");
    } else {
      this.set("to", Value.fromBytes(value as Bytes));
    }
  }

  get value(): BigInt | null {
    let value = this.get("value");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set value(value: BigInt | null) {
    if (value === null) {
      this.unset("value");
    } else {
      this.set("value", Value.fromBigInt(value as BigInt));
    }
  }

  get nonce(): BigInt | null {
    let value = this.get("nonce");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set nonce(value: BigInt | null) {
    if (value === null) {
      this.unset("nonce");
    } else {
      this.set("nonce", Value.fromBigInt(value as BigInt));
    }
  }

  get expiry(): BigInt | null {
    let value = this.get("expiry");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set expiry(value: BigInt | null) {
    if (value === null) {
      this.unset("expiry");
    } else {
      this.set("expiry", Value.fromBigInt(value as BigInt));
    }
  }

  get signer(): string | null {
    let value = this.get("signer");
    if (value === null) {
      return null;
    } else {
      return value.toString();
    }
  }

  set signer(value: string | null) {
    if (value === null) {
      this.unset("signer");
    } else {
      this.set("signer", Value.fromString(value as string));
    }
  }

  get signerAmount(): BigInt | null {
    let value = this.get("signerAmount");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set signerAmount(value: BigInt | null) {
    if (value === null) {
      this.unset("signerAmount");
    } else {
      this.set("signerAmount", Value.fromBigInt(value as BigInt));
    }
  }

  get signerTokenType(): BigInt | null {
    let value = this.get("signerTokenType");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set signerTokenType(value: BigInt | null) {
    if (value === null) {
      this.unset("signerTokenType");
    } else {
      this.set("signerTokenType", Value.fromBigInt(value as BigInt));
    }
  }

  get signerToken(): string | null {
    let value = this.get("signerToken");
    if (value === null) {
      return null;
    } else {
      return value.toString();
    }
  }

  set signerToken(value: string | null) {
    if (value === null) {
      this.unset("signerToken");
    } else {
      this.set("signerToken", Value.fromString(value as string));
    }
  }

  get sender(): string | null {
    let value = this.get("sender");
    if (value === null) {
      return null;
    } else {
      return value.toString();
    }
  }

  set sender(value: string | null) {
    if (value === null) {
      this.unset("sender");
    } else {
      this.set("sender", Value.fromString(value as string));
    }
  }

  get senderAmount(): BigInt | null {
    let value = this.get("senderAmount");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set senderAmount(value: BigInt | null) {
    if (value === null) {
      this.unset("senderAmount");
    } else {
      this.set("senderAmount", Value.fromBigInt(value as BigInt));
    }
  }

  get senderTokenType(): BigInt | null {
    let value = this.get("senderTokenType");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set senderTokenType(value: BigInt | null) {
    if (value === null) {
      this.unset("senderTokenType");
    } else {
      this.set("senderTokenType", Value.fromBigInt(value as BigInt));
    }
  }

  get senderToken(): string | null {
    let value = this.get("senderToken");
    if (value === null) {
      return null;
    } else {
      return value.toString();
    }
  }

  set senderToken(value: string | null) {
    if (value === null) {
      this.unset("senderToken");
    } else {
      this.set("senderToken", Value.fromString(value as string));
    }
  }

  get affiliate(): string | null {
    let value = this.get("affiliate");
    if (value === null) {
      return null;
    } else {
      return value.toString();
    }
  }

  set affiliate(value: string | null) {
    if (value === null) {
      this.unset("affiliate");
    } else {
      this.set("affiliate", Value.fromString(value as string));
    }
  }

  get affiliateAmount(): BigInt | null {
    let value = this.get("affiliateAmount");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set affiliateAmount(value: BigInt | null) {
    if (value === null) {
      this.unset("affiliateAmount");
    } else {
      this.set("affiliateAmount", Value.fromBigInt(value as BigInt));
    }
  }

  get affiliateTokenType(): BigInt | null {
    let value = this.get("affiliateTokenType");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set affiliateTokenType(value: BigInt | null) {
    if (value === null) {
      this.unset("affiliateTokenType");
    } else {
      this.set("affiliateTokenType", Value.fromBigInt(value as BigInt));
    }
  }

  get affiliateToken(): string | null {
    let value = this.get("affiliateToken");
    if (value === null) {
      return null;
    } else {
      return value.toString();
    }
  }

  set affiliateToken(value: string | null) {
    if (value === null) {
      this.unset("affiliateToken");
    } else {
      this.set("affiliateToken", Value.fromString(value as string));
    }
  }
}

export class Token extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Token entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Token entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Token", id.toString(), this);
  }

  static load(id: string): Token | null {
    return store.get("Token", id) as Token | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get isBlacklisted(): boolean {
    let value = this.get("isBlacklisted");
    return value.toBoolean();
  }

  set isBlacklisted(value: boolean) {
    this.set("isBlacklisted", Value.fromBoolean(value));
  }
}

export class Indexer extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Indexer entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Indexer entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Indexer", id.toString(), this);
  }

  static load(id: string): Indexer | null {
    return store.get("Indexer", id) as Indexer | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }
}

export class IndexContract extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save IndexContract entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save IndexContract entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("IndexContract", id.toString(), this);
  }

  static load(id: string): IndexContract | null {
    return store.get("IndexContract", id) as IndexContract | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get indexer(): string {
    let value = this.get("indexer");
    return value.toString();
  }

  set indexer(value: string) {
    this.set("indexer", Value.fromString(value));
  }

  get signerToken(): string {
    let value = this.get("signerToken");
    return value.toString();
  }

  set signerToken(value: string) {
    this.set("signerToken", Value.fromString(value));
  }

  get senderToken(): string {
    let value = this.get("senderToken");
    return value.toString();
  }

  set senderToken(value: string) {
    this.set("senderToken", Value.fromString(value));
  }

  get protocol(): Bytes {
    let value = this.get("protocol");
    return value.toBytes();
  }

  set protocol(value: Bytes) {
    this.set("protocol", Value.fromBytes(value));
  }
}

export class StakedAmount extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save StakedAmount entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save StakedAmount entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("StakedAmount", id.toString(), this);
  }

  static load(id: string): StakedAmount | null {
    return store.get("StakedAmount", id) as StakedAmount | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get indexer(): string {
    let value = this.get("indexer");
    return value.toString();
  }

  set indexer(value: string) {
    this.set("indexer", Value.fromString(value));
  }

  get staker(): string {
    let value = this.get("staker");
    return value.toString();
  }

  set staker(value: string) {
    this.set("staker", Value.fromString(value));
  }

  get signerToken(): string {
    let value = this.get("signerToken");
    return value.toString();
  }

  set signerToken(value: string) {
    this.set("signerToken", Value.fromString(value));
  }

  get senderToken(): string {
    let value = this.get("senderToken");
    return value.toString();
  }

  set senderToken(value: string) {
    this.set("senderToken", Value.fromString(value));
  }

  get protocol(): Bytes {
    let value = this.get("protocol");
    return value.toBytes();
  }

  set protocol(value: Bytes) {
    this.set("protocol", Value.fromBytes(value));
  }

  get stakeAmount(): BigInt {
    let value = this.get("stakeAmount");
    return value.toBigInt();
  }

  set stakeAmount(value: BigInt) {
    this.set("stakeAmount", Value.fromBigInt(value));
  }
}

export class Locator extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Locator entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Locator entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Locator", id.toString(), this);
  }

  static load(id: string): Locator | null {
    return store.get("Locator", id) as Locator | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get owner(): string {
    let value = this.get("owner");
    return value.toString();
  }

  set owner(value: string) {
    this.set("owner", Value.fromString(value));
  }

  get index(): string {
    let value = this.get("index");
    return value.toString();
  }

  set index(value: string) {
    this.set("index", Value.fromString(value));
  }

  get score(): BigInt {
    let value = this.get("score");
    return value.toBigInt();
  }

  set score(value: BigInt) {
    this.set("score", Value.fromBigInt(value));
  }

  get locator(): Bytes {
    let value = this.get("locator");
    return value.toBytes();
  }

  set locator(value: Bytes) {
    this.set("locator", Value.fromBytes(value));
  }
}

export class DelegateFactory extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save DelegateFactory entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save DelegateFactory entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("DelegateFactory", id.toString(), this);
  }

  static load(id: string): DelegateFactory | null {
    return store.get("DelegateFactory", id) as DelegateFactory | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }
}

export class DelegateContract extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save DelegateContract entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save DelegateContract entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("DelegateContract", id.toString(), this);
  }

  static load(id: string): DelegateContract | null {
    return store.get("DelegateContract", id) as DelegateContract | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get factory(): string {
    let value = this.get("factory");
    return value.toString();
  }

  set factory(value: string) {
    this.set("factory", Value.fromString(value));
  }

  get swap(): string {
    let value = this.get("swap");
    return value.toString();
  }

  set swap(value: string) {
    this.set("swap", Value.fromString(value));
  }

  get indexer(): string {
    let value = this.get("indexer");
    return value.toString();
  }

  set indexer(value: string) {
    this.set("indexer", Value.fromString(value));
  }

  get owner(): string {
    let value = this.get("owner");
    return value.toString();
  }

  set owner(value: string) {
    this.set("owner", Value.fromString(value));
  }

  get tradeWallet(): Bytes {
    let value = this.get("tradeWallet");
    return value.toBytes();
  }

  set tradeWallet(value: Bytes) {
    this.set("tradeWallet", Value.fromBytes(value));
  }
}

export class Rule extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Rule entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Rule entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Rule", id.toString(), this);
  }

  static load(id: string): Rule | null {
    return store.get("Rule", id) as Rule | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get delegate(): string {
    let value = this.get("delegate");
    return value.toString();
  }

  set delegate(value: string) {
    this.set("delegate", Value.fromString(value));
  }

  get owner(): string {
    let value = this.get("owner");
    return value.toString();
  }

  set owner(value: string) {
    this.set("owner", Value.fromString(value));
  }

  get signerToken(): string {
    let value = this.get("signerToken");
    return value.toString();
  }

  set signerToken(value: string) {
    this.set("signerToken", Value.fromString(value));
  }

  get senderToken(): string {
    let value = this.get("senderToken");
    return value.toString();
  }

  set senderToken(value: string) {
    this.set("senderToken", Value.fromString(value));
  }

  get maxSenderAmount(): BigInt {
    let value = this.get("maxSenderAmount");
    return value.toBigInt();
  }

  set maxSenderAmount(value: BigInt) {
    this.set("maxSenderAmount", Value.fromBigInt(value));
  }

  get priceCoef(): BigInt {
    let value = this.get("priceCoef");
    return value.toBigInt();
  }

  set priceCoef(value: BigInt) {
    this.set("priceCoef", Value.fromBigInt(value));
  }

  get priceExp(): BigInt {
    let value = this.get("priceExp");
    return value.toBigInt();
  }

  set priceExp(value: BigInt) {
    this.set("priceExp", Value.fromBigInt(value));
  }
}