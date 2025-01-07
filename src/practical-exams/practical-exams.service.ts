import { BadRequestException, Injectable } from '@nestjs/common';
import { CreatePracticalExamDto } from './dto/create-practical-exam.dto';
import { UpdatePracticalExamDto } from './dto/update-practical-exam.dto';
import { PracticalExam } from './entities/practical-exam.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Partner } from 'src/partners/entities/partner.entity';
import { TheoristExam } from 'src/theorist-exams/entities/theorist-exam.entity';

@Injectable()
export class PracticalExamsService {

  constructor(
        @InjectRepository(PracticalExam)
        private readonly practicalExamRepository : Repository<PracticalExam>,
        @InjectRepository(Partner)
        private readonly partnerRepository : Repository<Partner>,
        @InjectRepository(TheoristExam)
        private readonly theoristExamRepository : Repository<TheoristExam>
  ){ }

  async create(createPracticalExamDto: CreatePracticalExamDto) {
    const partner = await this.checkExistPartner(createPracticalExamDto.partner_Name);

    await this.checkApprovedTheoristExam(createPracticalExamDto.examinee_Id);

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

  async checkApprovedTheoristExam(examinee_Id: string) {
    const theoristExam = await this.theoristExamRepository.findOne({
      where: {
        examinee_Id: examinee_Id,
        result: true,
      },
    });

    if (!theoristExam) {
    throw new BadRequestException("No approved theorist exam found for the examinee");
    }
  }

  async checkExistPartner(partner_Name: string) {
    const partner = await this.partnerRepository.findOneBy({name: partner_Name});

    if (!partner) {
      throw new BadRequestException("Partner not found");
    }

    return partner;
  }
}
