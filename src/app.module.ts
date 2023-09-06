import { Module } from '@nestjs/common';
import { ProductsModule } from './modules/products/products.module';
import { UsersModule } from './modules/users/users.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: 'src/config/dev.env'
    }),
    ProductsModule,
    UsersModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
