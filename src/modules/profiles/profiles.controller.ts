import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ProfilesService } from "./profiles.service";

@Controller('profiles')
export class ProfilesController {
    constructor(
        public profilesService: ProfilesService
    ){}

    @Post()
    async create(@Body() body: any) {
        return await this.profilesService.create(body);
    }

    @Get()
    async getAll() {
        return await this.profilesService.getAll();
    }

    @Get(':id')
    async getById(@Param('id') id: string) {
        return await this.profilesService.getOneBy({ id });
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() body: any) {
        return await this.profilesService.update(id, body);
    }

    @Delete('/permanent_delete/:id')
    async permanentDelete(@Param('id') id: string) {
        return await this.profilesService.permanentDelete(id);
    }


    @Delete(':id')
    async softDelete(@Param('id') id: string) {
        return await this.profilesService.softDelete(id);
    }

    @Put('/recover/:id')
    async recover(@Param('id') id: string) {
        return await this.profilesService.recover(id);
    }
}