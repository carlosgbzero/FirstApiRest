import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateDriverDto } from './dto/create-driver.dto';
import { UpdateDriverDto } from './dto/update-driver.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Driver } from './entities/driver.entity';
import { Repository } from 'typeorm';
import { Center } from 'src/centers/entities/center.entity';
import { MedicalExam } from 'src/medical-exams/entities/medical-exam.entity';
import { TheoristExam } from 'src/theorist-exams/entities/theorist-exam.entity';
import { PracticalExam } from 'src/practical-exams/entities/practical-exam.entity';

@Injectable()
export class DriversService {

  constructor(
    @InjectRepository(Driver)
    private readonly driverRepository : Repository<Driver>,

    @InjectRepository(Center)
    private readonly centerRepository : Repository<Center>,

    @InjectRepository(MedicalExam)
    private readonly medicalExamRepository : Repository<MedicalExam>,

    @InjectRepository(TheoristExam)
    private readonly theoristExamRepository : Repository<TheoristExam>,

    @InjectRepository(PracticalExam)
    private readonly practicalExamRepository : Repository<PracticalExam>
  ) { }

  async create(createDriverDto: CreateDriverDto) {
    const center = await this.centerRepository.findOneBy({name : createDriverDto.centerName});

    if(!center){
      throw new BadRequestException("Center not found");
    }

    await this.checkExams(createDriverDto.id)

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

  async checkExams(id : string){
    const med = await this.medicalExamRepository.findOne({
      where: {
        examinee_Id : id,
        result : true
      },
    order :{
      date : "DESC"
    }})

    if(!med)
      throw new BadRequestException("Approved medical exam not found, cant be a driver")

    const theorist = await this.theoristExamRepository.findOne({
      where: {
        examinee_Id : id,
        result : true
      },
    order :{
      date : "DESC"
    }})

    if(!theorist)
      throw new BadRequestException("Approved theorist exam not found, cant be a driver")

    const practical = await this.practicalExamRepository.findOne({
      where: {
        examinee_Id : id,
        result : true
      },
    order :{
      date : "DESC"
    }})

    if(!practical)
      throw new BadRequestException("Approved practical exam not found, cant be a driver")
  }
}
