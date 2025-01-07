import { IsString, Length, MinLength } from "class-validator"

export class CreatePartnerDto {
   
    @IsString()
    @MinLength(4)
    name : string
    
    @IsString()
    type : string
    
    @IsString()
    direction : string
    
    @IsString()
    @Length( 9 , 9 )
    phone : string
}
