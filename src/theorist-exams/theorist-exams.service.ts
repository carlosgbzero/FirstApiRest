import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateTheoristExamDto } from './dto/create-theorist-exam.dto';
import { UpdateTheoristExamDto } from './dto/update-theorist-exam.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TheoristExam } from './entities/theorist-exam.entity';
import { Partner } from 'src/partners/entities/partner.entity';
import { MedicalExam } from 'src/medical-exams/entities/medical-exam.entity';

@Injectable()
export class TheoristExamsService {

  constructor(
      @InjectRepository(TheoristExam)
      private readonly theoristExamRepository : Repository<TheoristExam>,
      @InjectRepository(Partner)
      private readonly partnerRepository : Repository<Partner>,
      @InjectRepository(MedicalExam)
      private readonly medicalExamRepository: Repository<MedicalExam>
    ){ }

  async create(createTheoristExamDto: CreateTheoristExamDto) {
     const partner = await this.checkExistPartner(createTheoristExamDto.partner_Name);

     await this.checkApprovedMedicalExam(createTheoristExamDto.examinee_Id);

     return await this.theoristExamRepository.save({
       examinee_Id: createTheoristExamDto.examinee_Id,
       examiner_Name: createTheoristExamDto.examiner_Name,
       date: new Date(createTheoristExamDto.date),
       result: createTheoristExamDto.result,
       partner: partner
     });
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

  //Comprobaciones

  async checkApprovedMedicalExam(examinee_Id: string) {
    const medicalExam = await this.medicalExamRepository.findOne({
      where: {
        examinee_Id: examinee_Id,
        result: true,
      },
    });

    if (!medicalExam) {
      throw new BadRequestException("No approved medical exam found for the examinee");
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
