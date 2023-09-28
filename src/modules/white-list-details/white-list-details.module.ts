import { Module } from "@nestjs/common";
import { ServiceModule } from "src/common/service.module";
import { WhiteListDetailsController } from "./white-list-details.controller";

@Module({
    imports: [ServiceModule],
    controllers: [WhiteListDetailsController],
})
export class WhiteListDetailsModule {}
