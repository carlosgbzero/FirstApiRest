import { PartialType } from '@nestjs/mapped-types';
import { CreateDriverDto } from './create-driver.dto';
import { IsString, Length, MinLength } from 'class-validator';
import { Center } from 'src/centers/entities/center.entity';

export class UpdateDriverDto extends PartialType(CreateDriverDto) {
    @IsString()
        @Length(11,11)
        id : string
        

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
        email? : string
}
