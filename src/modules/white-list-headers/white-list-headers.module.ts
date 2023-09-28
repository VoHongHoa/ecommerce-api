import { Module } from "@nestjs/common";
import { ServiceModule } from "src/common/service.module";
import { WhiteListHeadersController } from "./white-list-headers.controller";

@Module({
    imports: [ServiceModule],
    controllers: [WhiteListHeadersController],
})
export class WhiteListHeadersModule {}
