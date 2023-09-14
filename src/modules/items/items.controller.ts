import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ItemsService } from "./items.service";
@Controller('items')

export class ItemsController {
    constructor(
        private itemsService: ItemsService
    ){}

    @Post()
    async create (@Body() body: any){
        return await this.itemsService.create(body)
    };

    @Get()
    async getAll (){
        return await this.itemsService.getAll()
    }

    @Get(':id')
    async getById(@Param('id') id: string){
        return await this.itemsService.getOneBy({id})
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() body: any) {
        return await this.itemsService.update(id, body);
    }

    @Delete('/permanent_delete/:id')
    async permanentDelete(@Param('id') id: string) {
        return await this.itemsService.permanentDelete(id);
    }

    @Delete(':id')
    async softDelete(@Param('id') id: string) {
        return await this.itemsService.softDelete(id);
    }

    @Put('/recover/:id')
    async recover(@Param('id') id: string) {
        return await this.itemsService.recover(id);
    }

    @Get(':id/category')
    async getCategory(@Param('id') id: string) {
        return await this.itemsService.getCategory(id);
    }
} 