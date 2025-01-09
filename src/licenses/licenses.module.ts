import { Module } from '@nestjs/common';
import { LicensesService } from './licenses.service';
import { LicensesController } from './licenses.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { License } from './entities/license.entity';
import { Driver } from 'src/drivers/entities/driver.entity';

@Module({
  imports:[TypeOrmModule.forFeature([License, Driver])],
  controllers: [LicensesController],
  providers: [LicensesService],
  exports : [TypeOrmModule],
})
export class LicensesModule {}
