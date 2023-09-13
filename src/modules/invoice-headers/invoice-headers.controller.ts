import { Controller, Get, Post, Put, Delete, Param, Body,  } from "@nestjs/common";
import { InvoiceHeadersService } from "./invoice-headers.service";


@Controller('invoice_headers')
export class InvoiceHeadersController {

    constructor(private invoiceHeadersService: InvoiceHeadersService) {}

    @Post()
    async create(@Body() body: any) {
        return await this.invoiceHeadersService.create(body);
    }

    @Get()
    async getAll() {
        return await this.invoiceHeadersService.getAll();
    }

    @Get(':id')
    async getById(@Param('id') id: string) {
        return await this.invoiceHeadersService.getOneBy({ id });
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() body: any) {
        return await this.invoiceHeadersService.update(id, body);
    }

    @Delete('/permanent_delete/:id')
    async permanentDelete(@Param('id') id: string) {
        return await this.invoiceHeadersService.permanentDelete(id);
    }


    @Delete(':id')
    async softDelete(@Param('id') id: string) {
        return await this.invoiceHeadersService.softDelete(id);
    }

    @Put('/recover/:id')
    async recover(@Param('id') id: string) {
        return await this.invoiceHeadersService.recover(id);
    }
}