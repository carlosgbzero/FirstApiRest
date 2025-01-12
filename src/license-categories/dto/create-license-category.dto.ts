import { IsNumber, IsString } from "class-validator"

export class CreateLicenseCategoryDto {

    @IsNumber()
    license_id : number

    @IsString()
    category_name : string

}
