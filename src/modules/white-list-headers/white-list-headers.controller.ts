import { Controller, Get, Post, Put, Delete, Param, Body,  } from "@nestjs/common";
import { WhiteListHeadersService } from "./white-list-headers.service";


@Controller('white_list_headers')
export class WhiteListHeadersController {

    constructor(private whiteListHeadersService: WhiteListHeadersService) {}

    @Post()
    async create(@Body() body: any) {
        return await this.whiteListHeadersService.create(body);
    }

    @Get()
    async getAll() {
        return await this.whiteListHeadersService.getAll();
    }

    @Get(':id')
    async getById(@Param('id') id: string) {
        return await this.whiteListHeadersService.getOneBy({ id });
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() body: any) {
        return await this.whiteListHeadersService.update(id, body);
    }

    @Delete('/permanent_delete/:id')
    async permanentDelete(@Param('id') id: string) {
        return await this.whiteListHeadersService.permanentDelete(id);
    }


    @Delete(':id')
    async softDelete(@Param('id') id: string) {
        return await this.whiteListHeadersService.softDelete(id);
    }

    @Put('/recover/:id')
    async recover(@Param('id') id: string) {
        return await this.whiteListHeadersService.recover(id);
    }
}