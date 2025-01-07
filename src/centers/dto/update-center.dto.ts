import { PartialType } from '@nestjs/mapped-types';
import { CreateCenterDto } from './create-center.dto';
import { IsString } from 'class-validator';

export class UpdateCenterDto extends PartialType(CreateCenterDto) {
    @IsString()
    logo? : string

    @IsString()
    name? : string

    @IsString()
    direction? : string

    @IsString()
    phone? : string

    @IsString()
    email? : string

    @IsString()
    dir_Name? : string

}
