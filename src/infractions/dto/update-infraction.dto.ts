import { PartialType } from '@nestjs/mapped-types';
import { CreateInfractionDto } from './create-infraction.dto';
import { IsString } from 'class-validator';

export class UpdateInfractionDto extends PartialType(CreateInfractionDto) {

    @IsString()
    status : string

}
