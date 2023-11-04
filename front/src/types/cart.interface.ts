import {IProduct} from "@/types/product.interface";


export interface ICartInterface{
    id:number
    product:IProduct
    quantity:number
    price:number
}