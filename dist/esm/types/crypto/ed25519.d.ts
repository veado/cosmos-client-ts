import { PrivKey as BasePrivKey, PubKey as BasePubKey } from './key';
declare module '../../proto' {
    namespace cosmos {
        namespace crypto {
            namespace ed25519 {
                interface PrivKey extends BasePrivKey {
                }
                interface PubKey extends BasePubKey {
                }
            }
        }
    }
}
