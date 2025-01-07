import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateMedicalExamDto } from './dto/create-medical-exam.dto';
import { UpdateMedicalExamDto } from './dto/update-medical-exam.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Partner } from 'src/partners/entities/partner.entity';
import { Repository } from 'typeorm';
import { MedicalExam } from './entities/medical-exam.entity';

@Injectable()
export class MedicalExamsService {

  constructor(
    @InjectRepository(MedicalExam)
    private readonly medicalExamRepository : Repository<MedicalExam>,
    @InjectRepository(Partner)
    private readonly partnerRepository : Repository<Partner>
  ){ }

  async create(createMedicalExamDto: CreateMedicalExamDto) {
    const partner = await this.checkExistPartner(createMedicalExamDto.partner_Name);

    this.checkUnapprovedMedicalExam(createMedicalExamDto.examinee_Id);

    return await this.medicalExamRepository.save({
      examinee_Id: createMedicalExamDto.examinee_Id,
      examiner_Name: createMedicalExamDto.examiner_Name,
      date: new Date(createMedicalExamDto.date),
      result: createMedicalExamDto.result,
      restrictions: createMedicalExamDto.restrictions,
      partner: partner
    });
  }

  async findAll() {
    return await this.medicalExamRepository.find();
  }

  async findOne(id: number) {
    return await this.medicalExamRepository.findOneBy({id});
  }

  async update(id: number, updateMedicalExamDto: UpdateMedicalExamDto) {
    return `This action updates a #${id} medicalExam`;
  }

  async remove(id: number) {
    return await this.medicalExamRepository.delete({id});
  }

  async checkUnapprovedMedicalExam(examinee_Id: string) {
    const medicalExam = await this.medicalExamRepository.findOne({
      where: {
        examinee_Id: examinee_Id,
        result: false,
      },
    });

    if (medicalExam) {
    throw new BadRequestException("You have an unapproved medical exam, you can't drive");
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
