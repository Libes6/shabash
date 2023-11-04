import {ICartInterface} from "@/types/cart.interface";

export  interface ICartInitialState{
    items:ICartInterface[]
    favorites:ICartInterface[]
}


export interface IAddToCartPayload extends Omit<ICartInterface, 'id'>{

}
export interface IChangeQuantityPayload extends Pick<ICartInterface, 'id'>{
    type:'minus'|'plus'
}

export type TypeSize ='SHORT'|'TALL'|'GRANDE'|'VENTI'

export interface IChangeSizePayload extends Pick<ICartInterface, 'id'>{
    size:TypeSize
}