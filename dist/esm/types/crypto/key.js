import { config } from '../../config/';
import * as bip32 from 'bip32';
import * as bip39 from 'bip39';
export async function generatePrivKeyFromMnemonic(mnemonic) {
    const seed = await bip39.mnemonicToSeed(mnemonic);
    const node = bip32.fromSeed(seed);
    const child = node.derivePath(`44'/${config.slip44.coinType}'/0'/0/0`);
    return Uint8Array.from(child.privateKey);
}
