import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { RolesService } from "./roles.service";

@Controller('roles')
export class RolesController {
    constructor(
        public roleService: RolesService
    ){}

    @Post()
    async create(@Body() body: any) {
        return await this.roleService.create(body);
    }

    @Get()
    async getAll() {
        return await this.roleService.getAll();
    }

    @Get(':id')
    async getById(@Param('id') id: string) {
        return await this.roleService.getOneBy({ id });
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() body: any) {
        return await this.roleService.update(id, body);
    }

    @Delete('/permanent_delete/:id')
    async permanentDelete(@Param('id') id: string) {
        return await this.roleService.permanentDelete(id);
    }


    @Delete(':id')
    async softDelete(@Param('id') id: string) {
        return await this.roleService.softDelete(id);
    }

    @Put('/recover/:id')
    async recover(@Param('id') id: string) {
        return await this.roleService.recover(id);
    }
}