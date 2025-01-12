import { PartialType } from '@nestjs/mapped-types';
import { CreateLicenseDto } from './create-license.dto';
import { IsISO8601, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateLicenseDto extends PartialType(CreateLicenseDto) {

    @IsOptional()
    @IsISO8601()
    expiration_date : string

    @IsOptional()
    @IsString()
    status : string

    @IsOptional()
    @IsNumber()
    points : number 

    @IsOptional()
    @IsISO8601()
    renewed : string

}
