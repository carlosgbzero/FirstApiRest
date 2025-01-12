import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateLicenseCategoryDto } from './dto/create-license-category.dto';
import { UpdateLicenseCategoryDto } from './dto/update-license-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { LicenseCategory } from './entities/license-category.entity';
import { Repository } from 'typeorm';
import { License } from 'src/licenses/entities/license.entity';
import { AllCategory } from 'src/all-categories/entities/all-category.entity';

@Injectable()
export class LicenseCategoriesService {

  constructor(
    @InjectRepository(LicenseCategory)
    private readonly licenseCategoryRepository : Repository<LicenseCategory>,

    @InjectRepository(License)
    private readonly licenseRepository : Repository<License>,

    @InjectRepository(AllCategory)
    private readonly allCategoryRepository : Repository<AllCategory>
  ){}

  async create(createLicenseCategoryDto: CreateLicenseCategoryDto) {
    const category = await this.allCategoryRepository.findOne({where:{
      category : createLicenseCategoryDto.category_name
    }})

    if(!category)
      throw new BadRequestException("Category no valid")

    const license = await this.licenseRepository.findOneBy({id : createLicenseCategoryDto.license_id})

    if(!license)
      throw new BadRequestException("License id no valid")

    return await this.licenseCategoryRepository.save({
      category : category,
      license : license
    }
    );
  }

  async findAll() {
    return await this.allCategoryRepository.find();
  }

  async findOne(id: number) {
    return await this.allCategoryRepository.findOneBy({id});
  }

  async update(id: number, updateLicenseCategoryDto: UpdateLicenseCategoryDto) {
    return `This action updates a #${id} licenseCategory`; //Not necessary
  }

  async remove(id: number) {
    return await this.allCategoryRepository.delete({id});
  }
}
