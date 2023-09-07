import { Controller, Get, Post, Put, Delete, Param, Body,  } from "@nestjs/common";
import { UsersService } from "./users.service";


@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) {}

    @Get()
    async getAll() {
        return await this.userService.getAll();
    }

    @Get(':id')
    async getById(@Param('id') id: string) {
        return await this.userService.getOneBy({ id });
    }

    @Post()
    async create(@Body() body: any) {
        return await this.userService.create(body);
    }

    // @Put(':id')
    // async update(@Param('id') id: string, @Body() body: any) {
    //     return await this.userService.update(id, body);
    // }

    // @Delete(':id')
    // async delete(@Param('id') id: string) {
    //     return await this.userService.delete({ id });
    // }
}