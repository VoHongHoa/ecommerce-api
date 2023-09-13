import { Module } from "@nestjs/common";
import { ServiceModule } from "src/common/service.module";
import { WhiteListDetailsService } from "./white-list-details.service";
import { WhiteListDetailsController } from "./white-list-details.controller";

@Module({
    imports: [
        ServiceModule
    ],
    providers: [WhiteListDetailsService],
    controllers: [WhiteListDetailsController],
})
export class WhiteListDetailsModule {}
