import {IsEmail, IsOptional, IsString} from "class-validator";

export  class  UserDto{
    @IsEmail()
    email:string

    @IsOptional()
    @IsString()
    password?:string

    @IsString()
    username:string

    @IsOptional()
    @IsString()
    name:string

    @IsOptional()
    @IsString()
    image:string

    @IsOptional()
    @IsString()
    phone:string


}
export  class  UserDtoEdit{
    @IsEmail()
    email:string


    @IsString()
    username:string

    @IsOptional()
    @IsString()
    name:string

    @IsOptional()
    @IsString()
    image:string

    @IsOptional()
    @IsString()
    phone:string

    @IsOptional()
    @IsString()
    description:string

    @IsOptional()
    @IsString()
    raiting:number

    @IsOptional()
    @IsString()
    tag:string

    @IsOptional()
    @IsString()
    flag:string
}
