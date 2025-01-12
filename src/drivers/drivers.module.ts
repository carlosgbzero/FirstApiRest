import { Module } from '@nestjs/common';
import { DriversService } from './drivers.service';
import { DriversController } from './drivers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Driver } from './entities/driver.entity';
import { Center } from 'src/centers/entities/center.entity';
import { TheoristExam } from 'src/theorist-exams/entities/theorist-exam.entity';
import { TheoristExamsModule } from 'src/theorist-exams/theorist-exams.module';
import { MedicalExamsModule } from 'src/medical-exams/medical-exams.module';
import { PracticalExamsModule } from 'src/practical-exams/practical-exams.module';

@Module({
  imports : [TypeOrmModule.forFeature([Driver,Center]), TheoristExamsModule,
MedicalExamsModule, PracticalExamsModule],
  controllers: [DriversController],
  providers: [DriversService],
  exports:[TypeOrmModule],
})
export class DriversModule {}
