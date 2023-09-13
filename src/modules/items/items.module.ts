import { Module } from '@nestjs/common';
import { ServiceModule } from 'src/common/service.module';
import { ItemsService } from './items.service';
import { ItemsController } from './items.controller';

@Module({
  imports: [ServiceModule],
  providers: [ItemsService],
  controllers: [ItemsController],
})
export class ItemsModule {}
