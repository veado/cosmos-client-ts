declare module '../proto' {
    namespace cosmos {
        namespace crypto {
            namespace multisig {
                namespace v1beta1 {
                    namespace CompactBitArray {
                        function empty(bitLength: number): CompactBitArray | null;
                        function from(value: boolean[]): CompactBitArray | null;
                    }
                    interface CompactBitArray {
                        count(): number;
                        getIndex(i: number): boolean;
                        setIndex(i: number, v: boolean): boolean;
                    }
                }
            }
        }
    }
}
export {};
