import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateDriverDto } from './dto/create-driver.dto';
import { UpdateDriverDto } from './dto/update-driver.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Driver } from './entities/driver.entity';
import { Repository } from 'typeorm';
import { Center } from 'src/centers/entities/center.entity';

@Injectable()
export class DriversService {

  constructor(
    @InjectRepository(Driver)
    private readonly driverRepository : Repository<Driver>,

    @InjectRepository(Center)
    private readonly centerRepository : Repository<Center>
  ) { }

  async create(createDriverDto: CreateDriverDto) {
    const center = await this.centerRepository.findOneBy({name : createDriverDto.centerName});

    if(!center){
      throw new BadRequestException("Center not found");
    }
    return await this.driverRepository.save({
      id : createDriverDto.id,
      name : createDriverDto.name,
      lastName : createDriverDto.lastName,
      direction : createDriverDto.direction,
      phone : createDriverDto.phone,
      email : createDriverDto.email,
      center
    }
    );
  }

  async findAll() {
    return await this.driverRepository.find();
  }

  async findOne(id: string) {
    return await this.driverRepository.findOneBy({id});
  }

  async update(id: string, updateDriverDto: UpdateDriverDto) {
    return this.driverRepository.update(id, updateDriverDto);
  }

  async remove(id: string) {
    return await this.driverRepository.delete({id});
  }
}
