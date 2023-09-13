import { Module } from "@nestjs/common";
import { ServiceModule } from "src/common/service.module";
import { CartHeadersService } from "./cart-headers.service";
import { CartHeadersController } from "./cart-headers.controller";

@Module({
    imports: [
        ServiceModule
    ],
    providers: [CartHeadersService],
    controllers: [CartHeadersController],
})
export class CartHeadersModule {}
