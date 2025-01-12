import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateLicenseDto } from './dto/create-license.dto';
import { UpdateLicenseDto } from './dto/update-license.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { License } from './entities/license.entity';
import { Repository } from 'typeorm';
import { Driver } from 'src/drivers/entities/driver.entity';

@Injectable()
export class LicensesService {

  constructor(
    @InjectRepository(License)
    private readonly licenseRepository : Repository<License>,

    @InjectRepository(Driver)
    private readonly driverRepository : Repository<Driver>
  ){}

  async create(createLicenseDto: CreateLicenseDto) {
    const driver = await this.driverRepository.findOneBy({id : createLicenseDto.driver_Id})

    if(!driver)
      throw new BadRequestException("Error, driver not found")

    const date = new Date(createLicenseDto.date);

    return await this.licenseRepository.save({
      issue_date : date ,
      expiration_date : date.setFullYear(date.getFullYear() + 4),
      renewed : null,
      status : "active",
      points : 0,
      driver : driver
    });
  }

  async findAll() {
    return await this.licenseRepository.find();
  }

  async findOne(id: number) {
    return await this.licenseRepository.findOneBy({id});
  }

  async update(id: number, updateLicenseDto: UpdateLicenseDto) {
    return `This action updates a #${id} license`; // Falta por implementar
  }

  async remove(id: number) {
    return await this.licenseRepository.delete({id});
  }
}
