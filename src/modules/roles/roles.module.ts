import { Module } from "@nestjs/common";
import { RolesController } from "./roles.controller";
import { ServiceModule } from "src/common/service.module";

@Module({
    imports: [ServiceModule],
    controllers: [RolesController]
})
export class RolesModule {}