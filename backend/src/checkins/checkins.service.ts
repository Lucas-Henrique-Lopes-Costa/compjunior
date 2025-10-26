import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCheckinDto } from './dto/create-checkin.dto';
import { UpdateCheckinDto } from './dto/update-checkin.dto';

@Injectable()
export class CheckinsService {
  constructor(private prisma: PrismaService) {}

  async create(createCheckinDto: CreateCheckinDto, userId: string) {
    const season = await this.prisma.season.findUnique({
      where: { id: createCheckinDto.seasonId },
    });

    if (!season) {
      throw new NotFoundException('Season not found');
    }

    return this.prisma.checkIn.create({
      data: {
        ...createCheckinDto,
        userId,
        points: season.pointsPerCheckIn,
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            avatar: true,
          },
        },
        season: true,
      },
    });
  }

  async findAll() {
    return this.prisma.checkIn.findMany({
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            avatar: true,
          },
        },
        season: true,
      },
      orderBy: { timestamp: 'desc' },
    });
  }

  async findByUser(userId: string) {
    return this.prisma.checkIn.findMany({
      where: { userId },
      include: {
        season: true,
      },
      orderBy: { timestamp: 'desc' },
    });
  }

  async findBySeason(seasonId: string) {
    return this.prisma.checkIn.findMany({
      where: { seasonId },
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
      orderBy: { timestamp: 'desc' },
    });
  }

  async findOne(id: string) {
    const checkin = await this.prisma.checkIn.findUnique({
      where: { id },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            avatar: true,
          },
        },
        season: true,
      },
    });

    if (!checkin) {
      throw new NotFoundException(`Check-in with ID ${id} not found`);
    }

    return checkin;
  }

  async update(id: string, updateCheckinDto: UpdateCheckinDto) {
    await this.findOne(id); // Check if exists

    return this.prisma.checkIn.update({
      where: { id },
      data: updateCheckinDto,
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            avatar: true,
          },
        },
        season: true,
      },
    });
  }

  async remove(id: string) {
    await this.findOne(id); // Check if exists

    return this.prisma.checkIn.delete({
      where: { id },
    });
  }
}
