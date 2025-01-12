import { IsString } from "class-validator"

export class CreateAllCategoryDto {

    @IsString()
    category : string
    @IsString()
    vehicle : string

}
