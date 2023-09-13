import { Controller, Get, Post, Put, Delete, Param, Body,  } from "@nestjs/common";
import { WhiteListDetailsService } from "./white-list-details.service";


@Controller('white_list_details')
export class WhiteListDetailsController {

    constructor(private whiteListDetailsService: WhiteListDetailsService) {}

    @Post()
    async create(@Body() body: any) {
        return await this.whiteListDetailsService.create(body);
    }

    @Get()
    async getAll() {
        return await this.whiteListDetailsService.getAll();
    }

    @Get(':id')
    async getById(@Param('id') id: string) {
        return await this.whiteListDetailsService.getOneBy({ id });
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() body: any) {
        return await this.whiteListDetailsService.update(id, body);
    }

    @Delete('/permanent_delete/:id')
    async permanentDelete(@Param('id') id: string) {
        return await this.whiteListDetailsService.permanentDelete(id);
    }


    @Delete(':id')
    async softDelete(@Param('id') id: string) {
        return await this.whiteListDetailsService.softDelete(id);
    }

    @Put('/recover/:id')
    async recover(@Param('id') id: string) {
        return await this.whiteListDetailsService.recover(id);
    }
}