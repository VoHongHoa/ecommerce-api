import { Module } from "@nestjs/common";
import { ProfilesController } from "./profiles.controller";
import { ProfilesService } from "./profiles.service";
import { ServiceModule } from "src/common/service.module";

@Module({
    imports: [
        ServiceModule,
    ],
    providers: [ProfilesService],
    controllers: [ProfilesController],
})
export class ProfilesModule {}