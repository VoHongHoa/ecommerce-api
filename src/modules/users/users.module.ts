import { Module } from "@nestjs/common";
import { UsersController } from "./users.controller";
import { ServiceModule } from "src/common/service.module";

@Module({
    imports: [ServiceModule],
    controllers: [UsersController],
})
export class UsersModule {}
