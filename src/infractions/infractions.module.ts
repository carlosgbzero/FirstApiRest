import { Module } from '@nestjs/common';
import { InfractionsService } from './infractions.service';
import { InfractionsController } from './infractions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Infraction } from './entities/infraction.entity';
import { License } from 'src/licenses/entities/license.entity';
import { LicensesModule } from 'src/licenses/licenses.module';

@Module({
  imports: [TypeOrmModule.forFeature([Infraction, License]), LicensesModule],
  controllers: [InfractionsController],
  providers: [InfractionsService],
  exports : [TypeOrmModule],
})
export class InfractionsModule {}
