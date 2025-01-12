import { IsISO8601, IsString } from "class-validator"

export class CreateLicenseDto {

    @IsString()
    driver_Id : string

    @IsISO8601()
    date : string

}
