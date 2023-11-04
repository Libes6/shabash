import { IsEmail,IsString, MinLength } from "class-validator"

export class AuthDto{
 
    email:string
    username:string
    @MinLength(6,{message:'hi 6 s'})
    password:string
  
}