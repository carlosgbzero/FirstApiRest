import { Module } from '@nestjs/common';
import { TheoristExamsService } from './theorist-exams.service';
import { TheoristExamsController } from './theorist-exams.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TheoristExam } from './entities/theorist-exam.entity';
import { Partner } from 'src/partners/entities/partner.entity';
import { MedicalExamsModule } from 'src/medical-exams/medical-exams.module';

@Module({
  imports : [TypeOrmModule.forFeature([TheoristExam,Partner]),
   MedicalExamsModule],
  controllers: [TheoristExamsController],
  providers: [TheoristExamsService],
  exports : [TypeOrmModule]
})
export class TheoristExamsModule {}
