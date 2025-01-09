import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LicenseCategoriesService } from './license-categories.service';
import { CreateLicenseCategoryDto } from './dto/create-license-category.dto';
import { UpdateLicenseCategoryDto } from './dto/update-license-category.dto';

@Controller('license-categories')
export class LicenseCategoriesController {
  constructor(private readonly licenseCategoriesService: LicenseCategoriesService) {}

  @Post()
  create(@Body() createLicenseCategoryDto: CreateLicenseCategoryDto) {
    return this.licenseCategoriesService.create(createLicenseCategoryDto);
  }

  @Get()
  findAll() {
    return this.licenseCategoriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.licenseCategoriesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLicenseCategoryDto: UpdateLicenseCategoryDto) {
    return this.licenseCategoriesService.update(+id, updateLicenseCategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.licenseCategoriesService.remove(+id);
  }
}
