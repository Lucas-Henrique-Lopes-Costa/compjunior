import api from './api';
import {
    LoginCredentials,
    RegisterData,
    AuthResponse,
    User,
    PasswordResetRequest,
    PasswordResetConfirm,
    ApiResponse,
} from '@/types';

export const authService = {
    // Login
    async login(credentials: LoginCredentials): Promise<AuthResponse> {
        const response = await api.post<AuthResponse>('/auth/login', credentials);

        // Salvar token e usuário no localStorage
        if (response.data.token) {
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('user', JSON.stringify(response.data.user));
        }

        return response.data;
    },

    // Registro
    async register(data: RegisterData): Promise<AuthResponse> {
        const response = await api.post<AuthResponse>('/auth/register', data);

        // Salvar token e usuário no localStorage
        if (response.data.token) {
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('user', JSON.stringify(response.data.user));
        }

        return response.data;
    },

    // Logout
    async logout(): Promise<void> {
        try {
            await api.post('/auth/logout');
        } finally {
            // Sempre limpar dados locais, mesmo se a requisição falhar
            localStorage.removeItem('token');
            localStorage.removeItem('user');
        }
    },

    // Verificar se o usuário está autenticado
    isAuthenticated(): boolean {
        if (typeof window === 'undefined') return false;
        const token = localStorage.getItem('token');
        return !!token;
    },

    // Obter usuário atual do localStorage
    getCurrentUser(): User | null {
        if (typeof window === 'undefined') return null;

        const userStr = localStorage.getItem('user');
        if (!userStr) return null;

        try {
            return JSON.parse(userStr) as User;
        } catch {
            return null;
        }
    },

    // Obter token atual
    getToken(): string | null {
        if (typeof window === 'undefined') return null;
        return localStorage.getItem('token');
    },

    // Validar token com o backend
    async validateToken(): Promise<User> {
        const response = await api.get<{ user: User }>('/auth/me');

        // Atualizar dados do usuário no localStorage
        localStorage.setItem('user', JSON.stringify(response.data.user));

        return response.data.user;
    },

    // Solicitar recuperação de senha
    async requestPasswordReset(data: PasswordResetRequest): Promise<ApiResponse<void>> {
        const response = await api.post<ApiResponse<void>>('/auth/forgot-password', data);
        return response.data;
    },

    // Confirmar recuperação de senha
    async confirmPasswordReset(data: PasswordResetConfirm): Promise<ApiResponse<void>> {
        const response = await api.post<ApiResponse<void>>('/auth/reset-password', data);
        return response.data;
    },

    // Atualizar senha (usuário autenticado)
    async updatePassword(currentPassword: string, newPassword: string): Promise<ApiResponse<void>> {
        const response = await api.put<ApiResponse<void>>('/auth/update-password', {
            currentPassword,
            newPassword,
        });
        return response.data;
    },
};
