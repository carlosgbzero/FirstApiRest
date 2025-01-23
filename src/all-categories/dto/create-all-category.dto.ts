import { IsString } from "class-validator"

export class CreateAllCategoryDto {

    @IsString()
    name : string
    @IsString()
    vehicle : string

}
