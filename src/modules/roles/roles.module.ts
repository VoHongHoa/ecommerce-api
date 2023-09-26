import { Module } from "@nestjs/common";
import { RolesController } from "./roles.controller";
import { RolesService } from "./roles.service";
import { ServiceModule } from "src/common/service.module";

@Module({
    imports: [ServiceModule],
    exports: [RolesService],
    providers: [RolesService],
    controllers: [RolesController]
})
export class RolesModule {}