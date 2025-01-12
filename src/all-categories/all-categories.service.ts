import { Injectable } from '@nestjs/common';
import { CreateAllCategoryDto } from './dto/create-all-category.dto';
import { UpdateAllCategoryDto } from './dto/update-all-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AllCategory } from './entities/all-category.entity';

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

  async update(id: number, updateAllCategoryDto: UpdateAllCategoryDto) {
    return `This action updates a #${id} allCategory`; // Not necessary
  }

  async remove(id: number) {
    return await this.allCategoryRepository.delete({id});
  }
}
