import { Injectable } from '@nestjs/common';
import { CreateAllCategoryDto } from './dto/create-all-category.dto';
import { UpdateAllCategoryDto } from './dto/update-all-category.dto';

@Injectable()
export class AllCategoriesService {
  create(createAllCategoryDto: CreateAllCategoryDto) {
    return 'This action adds a new allCategory';
  }

  findAll() {
    return `This action returns all allCategories`;
  }

  findOne(id: number) {
    return `This action returns a #${id} allCategory`;
  }

  update(id: number, updateAllCategoryDto: UpdateAllCategoryDto) {
    return `This action updates a #${id} allCategory`;
  }

  remove(id: number) {
    return `This action removes a #${id} allCategory`;
  }
}
