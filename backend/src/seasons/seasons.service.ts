import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateSeasonDto } from './dto/create-season.dto';
import { UpdateSeasonDto } from './dto/update-season.dto';

@Injectable()
export class SeasonsService {
  constructor(private prisma: PrismaService) {}

  async create(createSeasonDto: CreateSeasonDto) {
    return this.prisma.season.create({
      data: createSeasonDto,
    });
  }

  async findAll() {
    return this.prisma.season.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  async findActive() {
    return this.prisma.season.findMany({
      where: { isActive: true },
      orderBy: { startDate: 'desc' },
    });
  }

  async findOne(id: string) {
    const season = await this.prisma.season.findUnique({
      where: { id },
      include: {
        checkIns: {
          include: {
            user: {
              select: {
                id: true,
                name: true,
                email: true,
                avatar: true,
              },
            },
          },
        },
      },
    });

    if (!season) {
      throw new NotFoundException(`Season with ID ${id} not found`);
    }

    return season;
  }

  async update(id: string, updateSeasonDto: UpdateSeasonDto) {
    await this.findOne(id); // Check if exists

    return this.prisma.season.update({
      where: { id },
      data: updateSeasonDto,
    });
  }

  async remove(id: string) {
    await this.findOne(id); // Check if exists

    return this.prisma.season.delete({
      where: { id },
    });
  }
}
