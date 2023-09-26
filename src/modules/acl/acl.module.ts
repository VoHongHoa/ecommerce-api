import { Module } from "@nestjs/common";
import { ACLController } from "./acl.controller";
import { ServiceModule } from "src/common/service.module";
import { ACLService } from "./acl.service";

@Module({
    imports: [ServiceModule],
    exports: [ACLService],
    providers: [ACLService],
    controllers: [ACLController]
})
export class ACLModule {}