import { Global, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProfileEntity } from "src/modules/profiles/profiles.entity";
import { ProfilesService } from "src/modules/profiles/profiles.service";
import { UserEntity } from "src/modules/users/users.entity";
import { UsersService } from "src/modules/users/users.service";
import { BeanManagementService } from "./bean-management.service";

@Global()
@Module({
    imports: [
        TypeOrmModule.forFeature([
            UserEntity,
            ProfileEntity
        ])
    ],
    providers: [
        BeanManagementService,
    ],
    exports: [
        BeanManagementService,
    ]
})
export class ServiceModule {}