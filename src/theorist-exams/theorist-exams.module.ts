import { Module } from '@nestjs/common';
import { TheoristExamsService } from './theorist-exams.service';
import { TheoristExamsController } from './theorist-exams.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TheoristExam } from './entities/theorist-exam.entity';
import { Partner } from 'src/partners/entities/partner.entity';

@Module({
  imports : [TypeOrmModule.forFeature([TheoristExam,Partner])],
  controllers: [TheoristExamsController],
  providers: [TheoristExamsService],
  exports : [TypeOrmModule]
})
export class TheoristExamsModule {}
