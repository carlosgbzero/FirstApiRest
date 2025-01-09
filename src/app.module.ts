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
import { LicensesModule } from './licenses/licenses.module';
import { License } from './licenses/entities/license.entity';
import { LicenseCategoriesModule } from './license-categories/license-categories.module';
import { AllCategoriesModule } from './all-categories/all-categories.module';
import { InfractionsModule } from './infractions/infractions.module';
import { LicenseCategory } from './license-categories/entities/license-category.entity';
import { Infraction } from './infractions/entities/infraction.entity';
import { AllCategory } from './all-categories/entities/all-category.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type : "postgres",
      host : "localhost",
      port : 5432,
      username : "postgres",  // your username
      password : "elephant", // your password
      database : "SisGL",  // your database name. Create a new one 
      entities : [Center, Partner, Driver, MedicalExam, TheoristExam, PracticalExam,
        License, LicenseCategory,Infraction,AllCategory], // add all entities here
      synchronize : true,
    }),
    CentersModule,
    DriversModule,
    PartnersModule,
    MedicalExamsModule,
    TheoristExamsModule,
    PracticalExamsModule,
    LicensesModule,
    LicenseCategoriesModule,
    AllCategoriesModule,
    InfractionsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
