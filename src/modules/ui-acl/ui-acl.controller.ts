import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { UiACLService } from "./ui-acl.service";

@Controller('acl')
export class UiACLController {
    constructor(
        public uiAclService: UiACLService
    ){}

    @Post()
    async create(@Body() body: any) {
        return await this.uiAclService.create(body);
    }

    @Get()
    async getAll() {
        return await this.uiAclService.getAll();
    }

    @Get(':id')
    async getById(@Param('id') id: string) {
        return await this.uiAclService.getOneBy({ id });
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() body: any) {
        return await this.uiAclService.update(id, body);
    }

    @Delete('/permanent_delete/:id')
    async permanentDelete(@Param('id') id: string) {
        return await this.uiAclService.permanentDelete(id);
    }


    @Delete(':id')
    async softDelete(@Param('id') id: string) {
        return await this.uiAclService.softDelete(id);
    }

    @Put('/recover/:id')
    async recover(@Param('id') id: string) {
        return await this.uiAclService.recover(id);
    }
}