import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './modules/users/users.module';
import { ProfilesModule } from './modules/profiles/profiles.module';
import { ItemsModule } from './modules/items/items.module';
import { CategoriesModule } from './modules/categories/categories.module';
import { CartHeadersModule } from './modules/cart-headers/cart-headers.module';
import { CartDetailsModule } from './modules/cart-details/cart-details.module';
import { WhiteListHeadersModule } from './modules/white-list-headers/white-list-headers.module';
import { WhiteListDetailsModule } from './modules/white-list-details/white-list-details.module';
import { InvoiceHeadersModule } from './modules/invoice-headers/invoice-headers.module';
import { InvoiceDetailsModule } from './modules/invoice-details/invoice-details.module';
import { AuthModule } from './modules/auth/auth.module.';
import { RolesModule } from './modules/roles/roles.module';
import { RoleACLProfilesModule } from './modules/role-acl-profiles/role-acl-profiles.module';


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
    CategoriesModule,
    CartHeadersModule,
    CartDetailsModule,
    WhiteListHeadersModule,
    WhiteListDetailsModule,
    InvoiceHeadersModule,
    InvoiceDetailsModule,
    RolesModule,
    RoleACLProfilesModule,
    AuthModule
  ],
})
export class AppModule {}
