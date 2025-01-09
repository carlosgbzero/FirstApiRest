import { PartialType } from '@nestjs/mapped-types';
import { CreateAllCategoryDto } from './create-all-category.dto';

export class UpdateAllCategoryDto extends PartialType(CreateAllCategoryDto) {}
