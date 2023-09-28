import { Module } from "@nestjs/common";
import { ServiceModule } from "src/common/service.module";
import { InvoiceHeadersController } from "./invoice-headers.controller";

@Module({
    imports: [ServiceModule],
    controllers: [InvoiceHeadersController],
})
export class InvoiceHeadersModule {}
