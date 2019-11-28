import { Amino } from "../../../common/amino";
import { Msg } from "../../../types/cosmos-sdk/msg";
import { ValAddress } from "../../../types/cosmos-sdk/address/val-address";

@Amino.RegisterConcrete('cosmos-sdk/MsgUnjail')
export class MsgUnjail implements Msg {
/**
 * @param address
 */
constructor(
    public address: ValAddress
){ }
/**
 * @see Amino.reviver
 */
public static fromJSON(obj:any){
    return new this(
        ValAddress.fromBech32(obj.address)
    );
}
}