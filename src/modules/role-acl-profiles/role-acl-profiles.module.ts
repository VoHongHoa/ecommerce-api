import { Module } from "@nestjs/common";
import { ServiceModule } from "src/common/service.module";
import { RoleACLProfilesController } from "./role-acl-profiles.controller";

@Module({
    imports: [ServiceModule],
    controllers: [RoleACLProfilesController]
})
export class RoleACLProfilesModule {}