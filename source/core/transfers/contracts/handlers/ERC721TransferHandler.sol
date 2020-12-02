/*
  Copyright 2020 Swap Holdings Ltd.

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/

pragma solidity 0.5.16;

import "../interfaces/ITransferHandler.sol";
import "openzeppelin-solidity/contracts/token/ERC721/IERC721.sol";
import "@airswap/types/contracts/BytesManipulator.sol";

contract ERC721TransferHandler is ITransferHandler {
  using BytesManipulator for bytes;

  /**
   * @notice Function to wrap safeTransferFrom for ERC721
   * @param from address Wallet address to transfer from
   * @param to address Wallet address to transfer to
   * @param token address Contract address of token
   * @param data bytes The ERC721 id, encoded in 32 bytes
   * @return bool on success of the token transfer
   */
  function transferTokens(
    address from,
    address to,
    address token,
    bytes calldata data
  ) external returns (bool) {
    require(data.length == 32, "DATA_MUST_BE_32_BYTES");

    uint256 id = data.getUint256(0);
    IERC721(token).safeTransferFrom(from, to, id);
    return true;
  }
}
