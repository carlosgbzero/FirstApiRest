import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateInfractionDto } from './dto/create-infraction.dto';
import { UpdateInfractionDto } from './dto/update-infraction.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Infraction } from './entities/infraction.entity';
import { Repository } from 'typeorm';
import { License } from 'src/licenses/entities/license.entity';

@Injectable()
export class InfractionsService {

  constructor(
    @InjectRepository(Infraction)
    private readonly infractionRepository : Repository<Infraction>,

    @InjectRepository(License)
    private readonly licenseRepository : Repository<License>
  ){}

  async create(createInfractionDto: CreateInfractionDto) {
    const license = await this.licenseRepository.findOne({
      where:{
        driver:{
          id : createInfractionDto.driver_id
        }
      } 
    })

    if(!license)
      throw new BadRequestException("Driver license not found")

    
    return await this.infractionRepository.save({
      date : new Date(createInfractionDto.infraction_date),
      description : createInfractionDto.description,
      severity : createInfractionDto.severity,
      points : createInfractionDto.points,
      license : license,
      status : "Unpaid"
    });
  }

  async findAll() {
    return await this.infractionRepository.find();
  }

  async findOne(id: number) {
    return await this.infractionRepository.findOneBy({id});
  }

  async update(id: number, updateInfractionDto: UpdateInfractionDto) {
    return await this.infractionRepository.update(id, updateInfractionDto);
  }

  async remove(id: number) {
    return await this.infractionRepository.delete({id});
  }
}
