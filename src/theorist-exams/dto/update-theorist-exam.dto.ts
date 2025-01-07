import { PartialType } from '@nestjs/mapped-types';
import { CreateTheoristExamDto } from './create-theorist-exam.dto';

export class UpdateTheoristExamDto extends PartialType(CreateTheoristExamDto) {}
