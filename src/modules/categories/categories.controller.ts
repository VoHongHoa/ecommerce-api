import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CategoriesService } from './categories.service';

@Controller("/categories")
export class CategoriesController {
  constructor(private categoriesService: CategoriesService) {}
  @Post()
  async create(@Body() body: any) {
    return await this.categoriesService.create(body);
  }

  @Get()
  async getAll() {
    return await this.categoriesService.getAll();
  }

  @Get(':id')
  async getById(@Param() id: string) {
    return await this.categoriesService.getOneBy({ id });
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body: any) {
    return await this.categoriesService.update(id, body);
  }

  @Delete('/permanent_delete/:id')
  async permanentDelete(@Param('id') id: string) {
    return await this.categoriesService.permanentDelete(id);
  }

  @Delete(':id')
  async softDelete(@Param('id') id: string) {
    return await this.categoriesService.softDelete(id);
  }

  @Put('/recover/:id')
  async recover(@Param('id') id: string) {
    return await this.categoriesService.recover(id);
  }
}
