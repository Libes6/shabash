import {Prisma} from "@prisma/client";

export const returnUserObject:Prisma.UserSelect ={
    id: true,
    username: true,
    email: true,
    emailVerified:true,
    image: true,
    password: false,
    phone: true,
    description:true,
    role: true,
    tag: true,
    flag:true,
    post:true,
    createdAt:true,
    updateAt:true
}
