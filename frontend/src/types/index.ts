// Tipos de usuários
export enum UserRole {
  ADMIN = 'ADMIN',
  MEMBRO = 'MEMBRO',
  TRAINEE = 'TRAINEE',
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  avatar?: string;
  createdAt: Date;
  updatedAt: Date;
}

// Autenticação
export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  email: string;
  password: string;
  name: string;
  role: UserRole;
}

export interface AuthResponse {
  user: User;
  token: string;
  refreshToken?: string;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

// Check-in
export interface CheckIn {
  id: string;
  userId: string;
  user?: User;
  photoUrl: string;
  latitude: number;
  longitude: number;
  timestamp: Date;
  seasonId: string;
  points: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateCheckInData {
  photo: File;
  latitude: number;
  longitude: number;
  seasonId: string;
}

export interface UpdateCheckInData {
  photo?: File;
  latitude?: number;
  longitude?: number;
}

// Temporada/Período
export interface Season {
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

export interface CreateSeasonData {
  name: string;
  description?: string;
  startDate: Date;
  endDate: Date;
  pointsPerCheckIn: number;
}

// Ranking
export interface RankingEntry {
  userId: string;
  user: User;
  totalPoints: number;
  totalCheckIns: number;
  currentStreak: number;
  longestStreak: number;
  position: number;
}

export interface Ranking {
  seasonId: string;
  season: Season;
  overall: RankingEntry[];
  byRole: {
    [key in UserRole]?: RankingEntry[];
  };
  updatedAt: Date;
}

// Histórico do usuário
export interface UserHistory {
  userId: string;
  totalCheckIns: number;
  totalPoints: number;
  currentStreak: number;
  longestStreak: number;
  checkIns: CheckIn[];
  daysPresent: number;
  firstCheckIn?: Date;
  lastCheckIn?: Date;
}

// Prêmios/Conquistas
export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  requirement: number;
  type: 'CHECK_IN_COUNT' | 'STREAK' | 'POINTS' | 'SPECIAL';
}

export interface UserAchievement {
  id: string;
  userId: string;
  achievementId: string;
  achievement: Achievement;
  unlockedAt: Date;
}

// API Response genérico
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  errors?: string[];
}

// Paginação
export interface PaginationParams {
  page: number;
  limit: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// Filtros
export interface CheckInFilters extends PaginationParams {
  userId?: string;
  seasonId?: string;
  startDate?: Date;
  endDate?: Date;
}

export interface RankingFilters {
  seasonId: string;
  role?: UserRole;
  period?: 'daily' | 'weekly' | 'monthly' | 'all';
}

// Formulários
export interface PasswordResetRequest {
  email: string;
}

export interface PasswordResetConfirm {
  token: string;
  newPassword: string;
  confirmPassword: string;
}

// Estatísticas
export interface AdminStats {
  totalUsers: number;
  totalCheckIns: number;
  activeSeasons: number;
  checkInsToday: number;
  usersByRole: {
    [key in UserRole]: number;
  };
  averageCheckInsPerDay: number;
}
