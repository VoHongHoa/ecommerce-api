import { Module } from "@nestjs/common";
import { UiACLController } from "./ui-acl.controller";
import { ServiceModule } from "src/common/service.module";

@Module({
    imports: [ServiceModule],
    controllers: [UiACLController]
})
export class UiACLModule {}