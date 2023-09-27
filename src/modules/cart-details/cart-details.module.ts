import { Module } from "@nestjs/common";
import { ServiceModule } from "src/common/service.module";
import { CartDetailsController } from "./cart-details.controller";

@Module({
    imports: [ServiceModule],
    controllers: [CartDetailsController],
})
export class CartDetailsModule {}
