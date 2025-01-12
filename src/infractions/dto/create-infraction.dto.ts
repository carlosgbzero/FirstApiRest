import { IsISO8601, IsNumber, IsString,  } from "class-validator";

export class CreateInfractionDto {

    @IsISO8601()
    infraction_date : string

    @IsString()
    severity : string 

    @IsString()
    description : string

    @IsNumber()
    points : number

    @IsString()
    driver_id : string

}
