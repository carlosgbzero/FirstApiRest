import { IsNumber, IsOptional, IsString, Length, MinLength } from "class-validator"
import { Center } from "src/centers/entities/center.entity"

export class CreateDriverDto {

    @IsString()
   
    id : string
    
    @IsString()
    centerName: string;

    @IsString()
    @MinLength(3)
    name: string
    
    @IsString()
    @MinLength(3)
    lastName : string
    
    @IsString()
    direction : string
    
    @IsString()
    @Length(9,9)
    phone : string
    
    @IsString()
    @IsOptional()
    email? : string
}
