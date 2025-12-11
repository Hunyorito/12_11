/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { HttpException, Injectable } from '@nestjs/common';
import { CreateChildDto } from './dto/create-child.dto';
import { UpdateChildDto } from './dto/update-child.dto';
import { PrismaService } from 'src/prisma.service';


@Injectable()
export class ChildrenService {
  constructor(private readonly db: PrismaService) {}
  async ajandek(id: number, toyId: number) {
    const jol= (await this.findOne(id)).jo;
    if (jol==true) {
       const find= await this.db.gyerek.update({
      where: { id },
      data: { gamesId: toyId } ,
    });
    if (!find) {
      throw new HttpException(`Child with ID ${id} not found`,404);
    } return find;
    } else {
      throw new HttpException(`Child with ID ${id} is not good`,403);
    }

    
  }
  async delet(id: number) {
    const find= await this.db.gyerek.update({
      where: { id },
      data: { gamesId: null } ,
    });
    if (!find) {
      throw new HttpException(`Child with ID ${id} not found`,404);
    }else{ return find};
  }
  create(createChildDto: CreateChildDto) {
    return this.db.gyerek.create({
      data: {
        ...createChildDto
      },
    });
  }

  findAll() {
    return this.db.gyerek.findMany();
  }

  async findOne(id: number) {
    const find=await this.db.gyerek.findUnique({
      where: { id},
    });
    if (!find) {
      throw new HttpException(`Child with ID ${id} not found`,404);
    }
    else{ return find}
    
  }

  async update(id: number, updateChildDto: UpdateChildDto) {
    const find= await this.db.gyerek.update({
      where: { id },
      data: {...updateChildDto },
    });
    if (!find) {
      throw new HttpException(`Child with ID ${id} not found`,404);
    }
    else{ return find};
  }

  async remove(id: number) {
    const remove=await this.db.gyerek.delete({
      where: { id },
    });
    if (!remove) {
      throw new HttpException(`Child with ID ${id} not found`,404);
    }
    else{ return remove};
  }
}
