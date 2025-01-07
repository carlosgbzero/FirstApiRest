import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PracticalExamsService } from './practical-exams.service';
import { CreatePracticalExamDto } from './dto/create-practical-exam.dto';
import { UpdatePracticalExamDto } from './dto/update-practical-exam.dto';

@Controller('practical-exams')
export class PracticalExamsController {
  constructor(private readonly practicalExamsService: PracticalExamsService) {}

  @Post()
  create(@Body() createPracticalExamDto: CreatePracticalExamDto) {
    return this.practicalExamsService.create(createPracticalExamDto);
  }

  @Get()
  findAll() {
    return this.practicalExamsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.practicalExamsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePracticalExamDto: UpdatePracticalExamDto) {
    return this.practicalExamsService.update(+id, updatePracticalExamDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.practicalExamsService.remove(+id);
  }
}
