import { Module } from "@nestjs/common";
import { UiACLController } from "./ui-acl.controller";
import { ServiceModule } from "src/common/service.module";
import { UiACLService } from "./ui-acl.service";

@Module({
    imports: [ServiceModule],
    exports: [UiACLService],
    providers: [UiACLService],
    controllers: [UiACLController]
})
export class UiACLModule {}