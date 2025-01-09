import { PartialType } from '@nestjs/mapped-types';
import { CreateLicenseCategoryDto } from './create-license-category.dto';

export class UpdateLicenseCategoryDto extends PartialType(CreateLicenseCategoryDto) {}
