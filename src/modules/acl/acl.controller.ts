import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ACLService } from "./acl.service";

@Controller('acl')
export class ACLController {
    constructor(
        public aclService: ACLService
    ){}

    @Post()
    async create(@Body() body: any) {
        return await this.aclService.create(body);
    }

    @Get()
    async getAll() {
        return await this.aclService.getAll();
    }

    @Get(':id')
    async getById(@Param('id') id: string) {
        return await this.aclService.getOneBy({ id });
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() body: any) {
        return await this.aclService.update(id, body);
    }

    @Delete('/permanent_delete/:id')
    async permanentDelete(@Param('id') id: string) {
        return await this.aclService.permanentDelete(id);
    }


    @Delete(':id')
    async softDelete(@Param('id') id: string) {
        return await this.aclService.softDelete(id);
    }

    @Put('/recover/:id')
    async recover(@Param('id') id: string) {
        return await this.aclService.recover(id);
    }
}