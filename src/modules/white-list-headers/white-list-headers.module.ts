import { Module } from "@nestjs/common";
import { ServiceModule } from "src/common/service.module";
import { WhiteListHeadersService } from "./white-list-headers.service";
import { WhiteListHeadersController } from "./white-list-headers.controller";

@Module({
    imports: [
        ServiceModule
    ],
    providers: [WhiteListHeadersService],
    controllers: [WhiteListHeadersController],
})
export class WhiteListHeadersModule {}
