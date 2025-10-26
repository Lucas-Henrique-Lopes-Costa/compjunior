import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request,
} from '@nestjs/common';
import { CheckinsService } from './checkins.service';
import { CreateCheckinDto } from './dto/create-checkin.dto';
import { UpdateCheckinDto } from './dto/update-checkin.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('checkins')
@UseGuards(JwtAuthGuard)
export class CheckinsController {
  constructor(private readonly checkinsService: CheckinsService) {}

  @Post()
  create(@Body() createCheckinDto: CreateCheckinDto, @Request() req: any) {
    return this.checkinsService.create(createCheckinDto, req.user.userId);
  }

  @Get()
  findAll() {
    return this.checkinsService.findAll();
  }

  @Get('user/:userId')
  findByUser(@Param('userId') userId: string) {
    return this.checkinsService.findByUser(userId);
  }

  @Get('season/:seasonId')
  findBySeason(@Param('seasonId') seasonId: string) {
    return this.checkinsService.findBySeason(seasonId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.checkinsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCheckinDto: UpdateCheckinDto) {
    return this.checkinsService.update(id, updateCheckinDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.checkinsService.remove(id);
  }
}
