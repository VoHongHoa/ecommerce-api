import { Module } from "@nestjs/common";
import { UsersService } from "./users.service";
import { UsersController } from "./users.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserEntity } from "./users.entity";
import { BeanManagementService } from "src/common/bean-management.service";

@Module({
    providers: [UsersService, BeanManagementService],
    controllers: [UsersController],
    imports: [TypeOrmModule.forFeature([UserEntity])],
    exports: [],
})
export class UsersModule {}
