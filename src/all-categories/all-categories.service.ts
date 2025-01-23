import { Injectable } from '@nestjs/common';
import { CreateAllCategoryDto } from './dto/create-all-category.dto';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AllCategory } from './entities/all-category.entity';
import { UpdateAllCategoryDto } from './dto/update-all-category.dto';

@Injectable()
export class AllCategoriesService {

  constructor(
    @InjectRepository(AllCategory)
    private readonly allCategoryRepository: Repository<AllCategory>
  ){}

  async create(createAllCategoryDto: CreateAllCategoryDto) {
    const category = await this.allCategoryRepository.create(createAllCategoryDto);
    return await this.allCategoryRepository.save(category);
  }

  async findAll() {
    return await this.allCategoryRepository.find();
  }

  async findOne(id: number) {
    return await this.allCategoryRepository.findOneBy({id});
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async update(id: number, updateAllCategoryDto : UpdateAllCategoryDto) {
      return 
    }

  async remove(id: number) {
    return await this.allCategoryRepository.delete({id});
  }
}
