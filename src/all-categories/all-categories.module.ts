import { Module } from '@nestjs/common';
import { AllCategoriesService } from './all-categories.service';
import { AllCategoriesController } from './all-categories.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AllCategory } from './entities/all-category.entity';
import { LicenseCategory } from 'src/license-categories/entities/license-category.entity';

@Module({
  imports : [TypeOrmModule.forFeature([AllCategory, LicenseCategory])],
  controllers: [AllCategoriesController],
  providers: [AllCategoriesService],
  exports : [TypeOrmModule]
})
export class AllCategoriesModule {}
