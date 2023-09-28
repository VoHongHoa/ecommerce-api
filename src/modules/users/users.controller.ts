import { Controller, Get, Post, Put, Delete, Param, Body, UseGuards,  } from "@nestjs/common";
import { UsersService } from "./users.service";
import { AuthGuard } from "../auth/auth.guard";
import { AclAction } from "src/enums/enums";
import { Authorize } from "../authz/authorize.decorator";
import { AutherizeGuard } from "../authz/authorize.guard";


@Controller('users')
export class UsersController {

    constructor(private userService: UsersService) {}

    @Post()
    async create(@Body() body: any) {
        return await this.userService.create(body);
    }

    @Get()
    @Authorize([AclAction.READ, 'user'])
    @UseGuards(AutherizeGuard)
    @UseGuards(AuthGuard)
    async getAll() {
        return await this.userService.getAll();
    }

    @Get(':id')
    async getById(@Param('id') id: string) {
        return await this.userService.getOneBy({ id });
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() body: any) {
        return await this.userService.update(id, body);
    }

    @Delete('/permanent_delete/:id')
    async permanentDelete(@Param('id') id: string) {
        return await this.userService.permanentDelete(id);
    }


    @Delete(':id')
    async softDelete(@Param('id') id: string) {
        return await this.userService.softDelete(id);
    }

    @Put('/recover/:id')
    async recover(@Param('id') id: string) {
        return await this.userService.recover(id);
    }

    @Get(':id/profile')
    async getProfile(@Param('id') id: string) {
        return await this.userService.getProfile(id);
    }
}