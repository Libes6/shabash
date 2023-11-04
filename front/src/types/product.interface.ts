import {ICategory} from "@/types/category.interface";
import {IReview} from "@/types/review.interface";

export interface IProduct{
    id:number
    name:string
    slug:string
    description:string
    price:number
    reviews:IReview[]
    images:string[]
    createAt:string
    category:ICategory
}

export type TypeProducts ={
    products:IProduct[]
}
export type TypePaginationProducts ={
    length:number
    post:any[]
}