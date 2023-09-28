import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { RoleACLProfilesService } from "./role-acl-profiles.service";

@Controller('role_acl_profiles')
export class RoleACLProfilesController {
    constructor (
        public roleACLProfilesService: RoleACLProfilesService
    ){}

    @Post()
    async create(@Body() body: any) {
        return await this.roleACLProfilesService.create(body);
    }

    @Get()
    async getAll() {
        return await this.roleACLProfilesService.getAll();
    }

    @Get(':id')
    async getById(@Param('id') id: string) {
        return await this.roleACLProfilesService.getOneBy({ id });
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() body: any) {
        return await this.roleACLProfilesService.update(id, body);
    }

    @Delete('/permanent_delete/:id')
    async permanentDelete(@Param('id') id: string) {
        return await this.roleACLProfilesService.permanentDelete(id);
    }


    @Delete(':id')
    async softDelete(@Param('id') id: string) {
        return await this.roleACLProfilesService.softDelete(id);
    }

    @Put('/recover/:id')
    async recover(@Param('id') id: string) {
        return await this.roleACLProfilesService.recover(id);
    }
}