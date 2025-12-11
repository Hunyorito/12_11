/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Injectable, HttpException } from '@nestjs/common';
import { CreateToyDto } from './dto/create-toy.dto';
import { UpdateToyDto } from './dto/update-toy.dto';
import { PrismaService } from 'src/prisma.service';


@Injectable()
export class ToysService {
  constructor(private readonly db: PrismaService) {}
  create(createToyDto: CreateToyDto) {
    return this.db.games.create({
      data: {
        nev:createToyDto.name, anyag:createToyDto.material, suly:createToyDto.weight //, anyag:createToyDto.
      },
    });
  }

  findAll() {
    return this.db.games.findMany();
  }

  async findOne(id: number) {
    const found = await this.db.games.findUnique({
      where: { id },
    });
    if (!found) {
      throw new HttpException(`Toy with ID ${id} not found`,404);
    }
    else{
    return found};
  }

  async update(id: number, updateToyDto: UpdateToyDto) {
    const updata= await this.db.games.update({
      where: { id },
      data: { nev: updateToyDto.name ? updateToyDto.name:undefined, suly: updateToyDto.weight? updateToyDto.weight:undefined, anyag: updateToyDto.material? updateToyDto.material:undefined },
    });
    if (!updata) {
      throw new Error(`Toy with ID ${id} not found`);
    }
    else{
    return updata};
  }

  async remove(id: number) {
    const remo=await this.db.games.delete({
      where: { id },
    });
    if (!remo) {
      throw new Error(`Toy with ID ${id} not found`);
    }
    else{
    return remo};

  }
}
