import { IsString, IsOptional, IsDateString } from 'class-validator';

export class CreateCheckinDto {
  @IsString()
  seasonId: string;

  @IsString()
  photoUrl: string;

  @IsOptional()
  @IsDateString()
  timestamp?: string;
}
