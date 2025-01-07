import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateTheoristExamDto } from './dto/create-theorist-exam.dto';
import { UpdateTheoristExamDto } from './dto/update-theorist-exam.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TheoristExam } from './entities/theorist-exam.entity';
import { Partner } from 'src/partners/entities/partner.entity';

@Injectable()
export class TheoristExamsService {

  constructor(
      @InjectRepository(TheoristExam)
      private readonly theoristExamRepository : Repository<TheoristExam>,
      @InjectRepository(Partner)
      private readonly partnerRepository : Repository<Partner>
    ){ }

  async create(createTheoristExamDto: CreateTheoristExamDto) {
     const partner = await this.partnerRepository.findOneBy({name : createTheoristExamDto.partner_Name})
    
        if (!partner) {
          throw new BadRequestException("Partner not found")
        }
        return await this.theoristExamRepository.save({
          examinee_Id: createTheoristExamDto.examinee_Id,
          examiner_Name: createTheoristExamDto.examiner_Name,
          date: new Date(createTheoristExamDto.date),
          result: createTheoristExamDto.result,
          partner: partner
        })
  }

  async findAll() {
    return await this.theoristExamRepository.find();
  }

  async findOne(id: number) {
    return await this.theoristExamRepository.findOneBy({id});
  }

  async update(id: number, updateTheoristExamDto: UpdateTheoristExamDto) {
    return `This action updates a #${id} theoristExam`;
  }

  async remove(id: number) {
    return await this.theoristExamRepository.delete({id});
  }
}
