import { Module } from "@nestjs/common";
import { ServiceModule } from "src/common/service.module";
import { RoleACLProfilesController } from "./role-acl-profiles.controller";
import { RoleACLProfilesService } from "./role-acl-profiles.service";

@Module({
    imports: [ServiceModule],
    exports: [RoleACLProfilesService],
    providers: [RoleACLProfilesService],
    controllers: [RoleACLProfilesController]
})
export class RoleACLProfilesModule {}