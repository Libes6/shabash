import {NextPage} from "next";


export type TypeRoles = {
    isOnlyUser?:boolean
}

export type NextPageAuth<p={}> =NextPage<p> & TypeRoles


export type TypeComponentAythFields ={Component:TypeRoles}