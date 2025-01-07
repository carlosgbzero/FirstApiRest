import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CentersModule } from './centers/centers.module';
import { Center } from './centers/entities/center.entity';
import { PartnersModule } from './partners/partners.module';
import { Partner } from './partners/entities/partner.entity';
import { DriversModule } from './drivers/drivers.module';
import { Driver } from './drivers/entities/driver.entity';
import { MedicalExamsModule } from './medical-exams/medical-exams.module';
import {MedicalExam} from './medical-exams/entities/medical-exam.entity'
import { TheoristExamsModule } from './theorist-exams/theorist-exams.module';
import { TheoristExam } from './theorist-exams/entities/theorist-exam.entity';
import { PracticalExamsModule } from './practical-exams/practical-exams.module';
import { PracticalExam } from './practical-exams/entities/practical-exam.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type : "postgres",
      host : "localhost",
      port : 5432,
      username : "postgres",  // your username
      password : "elephant", // your password
      database : "SisGL",  // your database name. Create a new one 
      entities : [Center, Partner, Driver, MedicalExam, TheoristExam, PracticalExam],
      synchronize : true,
    }),
    CentersModule,
    DriversModule,
    PartnersModule,
    MedicalExamsModule,
    TheoristExamsModule,
    PracticalExamsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
