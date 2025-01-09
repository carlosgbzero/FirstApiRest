import { Module } from '@nestjs/common';
import { LicenseCategoriesService } from './license-categories.service';
import { LicenseCategoriesController } from './license-categories.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LicenseCategory } from './entities/license-category.entity';
import { License } from 'src/licenses/entities/license.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LicenseCategory,License])],
  controllers: [LicenseCategoriesController],
  providers: [LicenseCategoriesService],
  exports: [TypeOrmModule],
})
export class LicenseCategoriesModule {}
