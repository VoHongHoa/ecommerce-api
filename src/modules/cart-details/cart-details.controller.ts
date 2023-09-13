import { Controller, Get, Post, Put, Delete, Param, Body,  } from "@nestjs/common";
import { CartDetailsService } from "./cart-details.service";


@Controller('cart_details')
export class CartDetailsController {

    constructor(private cartDetailsService: CartDetailsService) {}

    @Post()
    async create(@Body() body: any) {
        return await this.cartDetailsService.create(body);
    }

    @Get()
    async getAll() {
        return await this.cartDetailsService.getAll();
    }

    @Get(':id')
    async getById(@Param('id') id: string) {
        return await this.cartDetailsService.getOneBy({ id });
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() body: any) {
        return await this.cartDetailsService.update(id, body);
    }

    @Delete('/permanent_delete/:id')
    async permanentDelete(@Param('id') id: string) {
        return await this.cartDetailsService.permanentDelete(id);
    }


    @Delete(':id')
    async softDelete(@Param('id') id: string) {
        return await this.cartDetailsService.softDelete(id);
    }

    @Put('/recover/:id')
    async recover(@Param('id') id: string) {
        return await this.cartDetailsService.recover(id);
    }
}