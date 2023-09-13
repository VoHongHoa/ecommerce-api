import { Module } from "@nestjs/common";
import { ServiceModule } from "src/common/service.module";
import { InvoiceHeadersService } from "./invoice-headers.service";
import { InvoiceHeadersController } from "./invoice-headers.controller";

@Module({
    imports: [
        ServiceModule
    ],
    providers: [InvoiceHeadersService],
    controllers: [InvoiceHeadersController],
})
export class InvoiceHeadersModule {}
