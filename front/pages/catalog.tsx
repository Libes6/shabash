import React, {FC} from 'react';
import {NextPageAuth} from "@/providers/auth-provider/auth-page.types";
import Meta from "@/components/ui/Meta";
import Layout from "@/components/ui/layout/Layout";

import {GetStaticPaths, GetStaticProps, NextPage} from "next";
import {CategoryService} from "@/services/category/category.service";
import {ICategory} from "@/types/category.interface";
import {TypePaginationProducts} from "@/types/product.interface";
import {ProductService} from "@/services/product/product.service";

interface ICatalogProps{
    categories:ICategory[]
}
const Catalog: NextPage<ICatalogProps> = ({categories}) => {
    return <p></p>
};

// export const getStaticPaths:GetStaticPaths = async ()=>{
//     const categories =await  CategoryService.getALL()
//     const paths = categories.data.map(category=>{return{params:{slug:category.slug}}})
//     return {paths, fallback:"blocking"}
//
// }

// export const getStaticProps:GetStaticProps<ICatalogProps> =async ()=>{
//     const {data} =await CategoryService.getALL()
//
//     console.log(data)
//     return {
//         props:{categories:data}
//     }
// }


export default Catalog;