import { Module } from '@nestjs/common';
import { DriversService } from './drivers.service';
import { DriversController } from './drivers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Driver } from './entities/driver.entity';
import { Center } from 'src/centers/entities/center.entity';

@Module({
  imports : [TypeOrmModule.forFeature([Driver,Center])],
  controllers: [DriversController],
  providers: [DriversService],
  exports:[TypeOrmModule],
})
export class DriversModule {}
