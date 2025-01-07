import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TheoristExamsService } from './theorist-exams.service';
import { CreateTheoristExamDto } from './dto/create-theorist-exam.dto';
import { UpdateTheoristExamDto } from './dto/update-theorist-exam.dto';

@Controller('theorist-exams')
export class TheoristExamsController {
  constructor(private readonly theoristExamsService: TheoristExamsService) {}

  @Post()
  create(@Body() createTheoristExamDto: CreateTheoristExamDto) {
    return this.theoristExamsService.create(createTheoristExamDto);
  }

  @Get()
  findAll() {
    return this.theoristExamsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.theoristExamsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTheoristExamDto: UpdateTheoristExamDto) {
    return this.theoristExamsService.update(+id, updateTheoristExamDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.theoristExamsService.remove(+id);
  }
}
