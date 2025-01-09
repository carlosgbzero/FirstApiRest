import { Module } from '@nestjs/common';
import { MedicalExamsService } from './medical-exams.service';
import { MedicalExamsController } from './medical-exams.controller';
import { Partner } from 'src/partners/entities/partner.entity';
import { MedicalExam } from './entities/medical-exam.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([MedicalExam, Partner])],
  controllers: [MedicalExamsController],
  providers: [MedicalExamsService],
  exports: [TypeOrmModule], // Asegúrate de exportar TypeOrmModule
})
export class MedicalExamsModule {}
