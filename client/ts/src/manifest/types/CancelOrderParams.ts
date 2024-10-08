/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet';
export type CancelOrderParams = {
  orderSequenceNumber: beet.bignum;
  orderIndexHint: beet.COption<number>;
};

/**
 * @category userTypes
 * @category generated
 */
export const cancelOrderParamsBeet =
  new beet.FixableBeetArgsStruct<CancelOrderParams>(
    [
      ['orderSequenceNumber', beet.u64],
      ['orderIndexHint', beet.coption(beet.u32)],
    ],
    'CancelOrderParams',
  );
