import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './modules/users/users.module';
import { ProfilesModule } from './modules/profiles/profiles.module';
import { ItemsModule } from './modules/items/items.module';
import { CategoriesModule } from './modules/categories/categories.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: 'src/config/dev.env'
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.APP_DB_HOST,
      port: parseInt(process.env.APP_DB_PORT),
      username: process.env.APP_DB_USERNAME,
      password: process.env.APP_DB_PASSWORD,
      database: process.env.APP_DB_DATABASE,
      autoLoadEntities: true,
      synchronize: true
    }),
    UsersModule,
    ProfilesModule,
    ItemsModule,
    CategoriesModule
  ],
})
export class AppModule {}
