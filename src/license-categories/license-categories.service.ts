import { Injectable } from '@nestjs/common';
import { CreateLicenseCategoryDto } from './dto/create-license-category.dto';
import { UpdateLicenseCategoryDto } from './dto/update-license-category.dto';

@Injectable()
export class LicenseCategoriesService {
  create(createLicenseCategoryDto: CreateLicenseCategoryDto) {
    return 'This action adds a new licenseCategory';
  }

  findAll() {
    return `This action returns all licenseCategories`;
  }

  findOne(id: number) {
    return `This action returns a #${id} licenseCategory`;
  }

  update(id: number, updateLicenseCategoryDto: UpdateLicenseCategoryDto) {
    return `This action updates a #${id} licenseCategory`;
  }

  remove(id: number) {
    return `This action removes a #${id} licenseCategory`;
  }
}
