import { Module } from '@nestjs/common';
import { ServiceModule } from 'src/common/service.module';
import { ItemsController } from './items.controller';

@Module({
  imports: [ServiceModule],
  controllers: [ItemsController],
})
export class ItemsModule {}
