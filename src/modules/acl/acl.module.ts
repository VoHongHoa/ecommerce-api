import { Module } from "@nestjs/common";
import { ACLController } from "./acl.controller";
import { ServiceModule } from "src/common/service.module";

@Module({
    imports: [ServiceModule],
    controllers: [ACLController]
})
export class ACLModule {}