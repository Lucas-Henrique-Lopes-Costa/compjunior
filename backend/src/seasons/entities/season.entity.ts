export class Season {
  id: string;
  name: string;
  description?: string;
  startDate: Date;
  endDate: Date;
  isActive: boolean;
  pointsPerCheckIn: number;
  createdAt: Date;
  updatedAt: Date;
}
