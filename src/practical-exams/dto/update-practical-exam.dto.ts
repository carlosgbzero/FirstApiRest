import { PartialType } from '@nestjs/mapped-types';
import { CreatePracticalExamDto } from './create-practical-exam.dto';

export class UpdatePracticalExamDto extends PartialType(CreatePracticalExamDto) {}
