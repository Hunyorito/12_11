/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { ChildrenService } from './children.service';
import { CreateChildDto } from './dto/create-child.dto';
import { UpdateChildDto } from './dto/update-child.dto';
import { HttpException } from '@nestjs/common/exceptions/http.exception';

@Controller('children')
export class ChildrenController {
  constructor(private readonly childrenService: ChildrenService) {}
  @Put(":id/toys/:toyId")
  ajandek(@Param('id') id: string, @Param('toyId') toyId: string) {
    /*
    try {
      return this.childrenService.ajandek(+id, +toyId);
    } catch (error) {
       throw new HttpException(`Child with ID ${id} not found ${error}`,404);
    }
       */
   return this.childrenService.ajandek(+id, +toyId);
  }

  @Post()
  create(@Body() createChildDto: CreateChildDto) {
    return this.childrenService.create(createChildDto);
  }

  @Get()
  findAll() {
    return this.childrenService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.childrenService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateChildDto: UpdateChildDto) {
    return this.childrenService.update(+id, updateChildDto);
  }
  @Delete(':id/toys/:toyId')
  removeToy(@Param('id') id: string) {
    return this.childrenService.delet(+id);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.childrenService.remove(+id);
  }
}
