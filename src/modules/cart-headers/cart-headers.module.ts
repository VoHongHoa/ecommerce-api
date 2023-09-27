import { Module } from "@nestjs/common";
import { ServiceModule } from "src/common/service.module";
import { CartHeadersController } from "./cart-headers.controller";

@Module({
    imports: [ServiceModule],
    controllers: [CartHeadersController],
})
export class CartHeadersModule {}
