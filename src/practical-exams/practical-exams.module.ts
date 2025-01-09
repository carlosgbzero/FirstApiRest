import { Module } from '@nestjs/common';
import { PracticalExamsService } from './practical-exams.service';
import { PracticalExamsController } from './practical-exams.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PracticalExam } from './entities/practical-exam.entity';
import { Partner } from 'src/partners/entities/partner.entity';
import { TheoristExamsModule } from 'src/theorist-exams/theorist-exams.module';

@Module({
  imports : [TypeOrmModule.forFeature([PracticalExam,Partner]), TheoristExamsModule],
  controllers: [PracticalExamsController],
  providers: [PracticalExamsService],
  exports : [TypeOrmModule],
})
export class PracticalExamsModule {}
