import { Module } from "@nestjs/common";
import { ProfilesController } from "./profiles.controller";
import { ServiceModule } from "src/common/service.module";

@Module({
    imports: [ServiceModule,],
    controllers: [ProfilesController],
})
export class ProfilesModule {}