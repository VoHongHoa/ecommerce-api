import { Module } from "@nestjs/common";
import { ServiceModule } from "src/common/service.module";
import { InvoiceDetailsService } from "./invoice-details.service";
import { InvoiceDetailsController } from "./invoice-details.controller";

@Module({
    imports: [ServiceModule],
    controllers: [InvoiceDetailsController],
})
export class InvoiceDetailsModule {}
