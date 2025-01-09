import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AllCategoriesService } from './all-categories.service';
import { CreateAllCategoryDto } from './dto/create-all-category.dto';
import { UpdateAllCategoryDto } from './dto/update-all-category.dto';

@Controller('all-categories')
export class AllCategoriesController {
  constructor(private readonly allCategoriesService: AllCategoriesService) {}

  @Post()
  create(@Body() createAllCategoryDto: CreateAllCategoryDto) {
    return this.allCategoriesService.create(createAllCategoryDto);
  }

  @Get()
  findAll() {
    return this.allCategoriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.allCategoriesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAllCategoryDto: UpdateAllCategoryDto) {
    return this.allCategoriesService.update(+id, updateAllCategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.allCategoriesService.remove(+id);
  }
}
