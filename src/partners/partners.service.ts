import { Injectable } from '@nestjs/common';
import { CreatePartnerDto } from './dto/create-partner.dto';
import { UpdatePartnerDto } from './dto/update-partner.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Partner } from './entities/partner.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PartnersService {

  constructor(
    @InjectRepository(Partner)
    private readonly partnerRepository : Repository<Partner>
  ){ }

  async create(createPartnerDto: CreatePartnerDto) {
    const partner = this.partnerRepository.create(createPartnerDto);
    return await this.partnerRepository.save(partner);
  }

  async findAll() {
    return await this.partnerRepository.find();
  }

  async findOne(id: number) {
    return await this.partnerRepository.findOneBy({id});
  }

  async update(id: number, updatePartnerDto: UpdatePartnerDto) {
    return await this.partnerRepository.update(id, updatePartnerDto);
  }

  async remove(id: number) {
    return await this.partnerRepository.delete({id});
  }
}
