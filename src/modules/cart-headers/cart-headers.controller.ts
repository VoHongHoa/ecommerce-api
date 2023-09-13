import { Controller, Get, Post, Put, Delete, Param, Body,  } from "@nestjs/common";
import { CartHeadersService } from "./cart-headers.service";


@Controller('cart_headers')
export class CartHeadersController {

    constructor(private cartHeadersService: CartHeadersService) {}

    @Post()
    async create(@Body() body: any) {
        return await this.cartHeadersService.create(body);
    }

    @Get()
    async getAll() {
        return await this.cartHeadersService.getAll();
    }

    @Get(':id')
    async getById(@Param('id') id: string) {
        return await this.cartHeadersService.getOneBy({ id });
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() body: any) {
        return await this.cartHeadersService.update(id, body);
    }

    @Delete('/permanent_delete/:id')
    async permanentDelete(@Param('id') id: string) {
        return await this.cartHeadersService.permanentDelete(id);
    }


    @Delete(':id')
    async softDelete(@Param('id') id: string) {
        return await this.cartHeadersService.softDelete(id);
    }

    @Put('/recover/:id')
    async recover(@Param('id') id: string) {
        return await this.cartHeadersService.recover(id);
    }
}