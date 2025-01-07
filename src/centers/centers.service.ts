import { Injectable } from '@nestjs/common';
import { CreateCenterDto } from './dto/create-center.dto';
import { UpdateCenterDto } from './dto/update-center.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Center } from './entities/center.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CentersService {

  constructor(
    @InjectRepository(Center)
    private readonly centerRepository: Repository<Center>
  ){}

  async create(createCenterDto: CreateCenterDto) {
    const center = this.centerRepository.create(createCenterDto);
    return await this.centerRepository.save(center);
  }

  async findAll() {
    return await this.centerRepository.find();
  }

  async findOne(id: number) {
    return await this.centerRepository.findOneBy({id});
  }

  async update(id: number, updateCenterDto: UpdateCenterDto) {
    return await this.centerRepository.update(id , updateCenterDto);
  }

  async remove(id: number) {
    return await this.centerRepository.delete({id});
  }
}
