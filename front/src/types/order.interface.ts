import {ICartInterface} from "@/types/cart.interface";
import {IUser} from "@/types/user.interface";

export enum EnumOrderStatus {
  PENDING = 'PENDING',
  PAYED = 'PAYED',
  SHIPPED = 'SHIPPED',
  DELIVERED = 'DELIVERED',
}

export interface IOrder {
    id:number
    items:ICartInterface[]
    status:EnumOrderStatus
    user:IUser
    createdAt:string
    total:number
    updateAt:string
    userId?:string
}
