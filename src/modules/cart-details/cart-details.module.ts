import { Module } from "@nestjs/common";
import { ServiceModule } from "src/common/service.module";
import { CartDetailsService } from "./cart-details.service";
import { CartDetailsController } from "./cart-details.controller";

@Module({
    imports: [
        ServiceModule
    ],
    providers: [CartDetailsService],
    controllers: [CartDetailsController],
})
export class CartDetailsModule {}
