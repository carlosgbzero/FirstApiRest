import { BadRequestException, Injectable } from '@nestjs/common';
import { CreatePracticalExamDto } from './dto/create-practical-exam.dto';
import { UpdatePracticalExamDto } from './dto/update-practical-exam.dto';
import { PracticalExam } from './entities/practical-exam.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Partner } from 'src/partners/entities/partner.entity';

@Injectable()
export class PracticalExamsService {

  constructor(
        @InjectRepository(PracticalExam)
        private readonly practicalExamRepository : Repository<PracticalExam>,
        @InjectRepository(Partner)
        private readonly partnerRepository : Repository<Partner>
  ){ }

  async create(createPracticalExamDto: CreatePracticalExamDto) {
    const partner = await this.partnerRepository.findOneBy({ name: createPracticalExamDto.partner_Name });

    if (!partner) {
      throw new BadRequestException('Partner not found');
    }

    return await this.practicalExamRepository.save({
      license_Type : createPracticalExamDto.license_Type,
      examinee_Id: createPracticalExamDto.examinee_Id,
      examiner_Name: createPracticalExamDto.examiner_Name,
      date: new Date(createPracticalExamDto.date),
      result: createPracticalExamDto.result,
      partner : partner,
    });
  }

  async findAll() {
    return await this.practicalExamRepository.find();
  }

  async findOne(id: number) {
    return await this.practicalExamRepository.findOneBy({id});
  }

  async update(id: number, updatePracticalExamDto: UpdatePracticalExamDto) {
    return `This action updates a #${id} practicalExam`;
  }

  async remove(id: number) {
    return await this.practicalExamRepository.delete({id});
  }
}
