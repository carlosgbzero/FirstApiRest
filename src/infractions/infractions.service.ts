import { Injectable } from '@nestjs/common';
import { CreateInfractionDto } from './dto/create-infraction.dto';
import { UpdateInfractionDto } from './dto/update-infraction.dto';

@Injectable()
export class InfractionsService {
  create(createInfractionDto: CreateInfractionDto) {
    return 'This action adds a new infraction';
  }

  findAll() {
    return `This action returns all infractions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} infraction`;
  }

  update(id: number, updateInfractionDto: UpdateInfractionDto) {
    return `This action updates a #${id} infraction`;
  }

  remove(id: number) {
    return `This action removes a #${id} infraction`;
  }
}
