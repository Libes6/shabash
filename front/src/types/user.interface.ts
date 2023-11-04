import {IProduct} from "@/types/product.interface";
import {IOrder} from "@/types/order.interface";
import {IReview} from "@/types/review.interface";


export interface IUser{
    id: number,
    email: string,
    username: string,
    image: string[],
    phone: string,
    password: string,
    createdAt:string,
    emailVerified:boolean,
    review:IReview[],
    updateAt:string

}

export interface IFullUser extends IUser{
    favorites:IProduct[]
    orders:IOrder
}