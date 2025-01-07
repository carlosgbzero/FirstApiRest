import { IsEmail, IsString, Length, MinLength, minLength } from "class-validator";

export class CreateCenterDto {
    
    @IsString()
    logo : string

    @IsString()
    @MinLength(4)
    name : string

    @IsString()
    @MinLength(5)
    direction : string

    @IsString()
    @Length(9)
    phone : string

    @IsString()
    @IsEmail()
    email : string

    @IsString()
    dir_Name : string

}