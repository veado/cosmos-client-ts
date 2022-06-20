import { PubKey as BasePubKey } from './key';
declare module '../../proto' {
    namespace cosmos {
        namespace crypto {
            namespace multisig {
                interface LegacyAminoPubKey extends BasePubKey {
                }
            }
        }
    }
}
