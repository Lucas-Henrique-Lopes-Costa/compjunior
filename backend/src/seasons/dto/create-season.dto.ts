import { IsString, IsOptional, IsBoolean, IsInt, Min, IsDateString } from 'class-validator';

export class CreateSeasonDto {
  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsDateString()
  startDate: string;

  @IsDateString()
  endDate: string;

  @IsBoolean()
  @IsOptional()
  isActive?: boolean;

  @IsInt()
  @Min(1)
  @IsOptional()
  pointsPerCheckIn?: number;
}
