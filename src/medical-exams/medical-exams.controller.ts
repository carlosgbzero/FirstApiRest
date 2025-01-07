import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MedicalExamsService } from './medical-exams.service';
import { CreateMedicalExamDto } from './dto/create-medical-exam.dto';
import { UpdateMedicalExamDto } from './dto/update-medical-exam.dto';

@Controller('medical-exams')
export class MedicalExamsController {
  constructor(private readonly medicalExamsService: MedicalExamsService) {}

  @Post()
  create(@Body() createMedicalExamDto: CreateMedicalExamDto) {
    return this.medicalExamsService.create(createMedicalExamDto);
  }

  @Get()
  findAll() {
    return this.medicalExamsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.medicalExamsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMedicalExamDto: UpdateMedicalExamDto) {
    return this.medicalExamsService.update(+id, updateMedicalExamDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.medicalExamsService.remove(+id);
  }
}
