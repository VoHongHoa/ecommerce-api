import { Controller, Get, Post, Put, Delete, Param, Body,  } from "@nestjs/common";
import { InvoiceDetailsService } from "./invoice-details.service";


@Controller('invoice_details')
export class InvoiceDetailsController {

    constructor(private invoiceDetailsService: InvoiceDetailsService) {}

    @Post()
    async create(@Body() body: any) {
        return await this.invoiceDetailsService.create(body);
    }

    @Get()
    async getAll() {
        return await this.invoiceDetailsService.getAll();
    }

    @Get(':id')
    async getById(@Param('id') id: string) {
        return await this.invoiceDetailsService.getOneBy({ id });
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() body: any) {
        return await this.invoiceDetailsService.update(id, body);
    }

    @Delete('/permanent_delete/:id')
    async permanentDelete(@Param('id') id: string) {
        return await this.invoiceDetailsService.permanentDelete(id);
    }


    @Delete(':id')
    async softDelete(@Param('id') id: string) {
        return await this.invoiceDetailsService.softDelete(id);
    }

    @Put('/recover/:id')
    async recover(@Param('id') id: string) {
        return await this.invoiceDetailsService.recover(id);
    }
}