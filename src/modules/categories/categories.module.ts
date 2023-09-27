import { Module } from '@nestjs/common';
import { ServiceModule } from 'src/common/service.module';
import { CategoriesController } from './categories.controller';

@Module({
  imports: [ServiceModule],
  controllers: [CategoriesController],
})
export class CategoriesModule {}
