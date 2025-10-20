'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import { authService } from '@/services/auth.service';
import {
    User,
    LoginCredentials,
    RegisterData,
    AuthState,
} from '@/types';
import { getErrorMessage } from '@/services/api';

interface AuthContextType extends AuthState {
    login: (credentials: LoginCredentials) => Promise<void>;
    register: (data: RegisterData) => Promise<void>;
    logout: () => Promise<void>;
    updateUser: (user: User) => void;
    error: string | null;
    clearError: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [token, setToken] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    // Verificar autenticação ao carregar
    useEffect(() => {
        const initAuth = async () => {
            try {
                const savedToken = authService.getToken();
                const savedUser = authService.getCurrentUser();

                if (savedToken && savedUser) {
                    // Validar token com o backend
                    try {
                        const validatedUser = await authService.validateToken();
                        setUser(validatedUser);
                        setToken(savedToken);
                    } catch {
                        // Token inválido, limpar dados
                        authService.logout();
                    }
                }
            } catch (err) {
                console.error('Erro ao inicializar autenticação:', err);
            } finally {
                setIsLoading(false);
            }
        };

        initAuth();
    }, []);

    const login = async (credentials: LoginCredentials) => {
        try {
            setIsLoading(true);
            setError(null);

            const response = await authService.login(credentials);

            setUser(response.user);
            setToken(response.token);

            // Redirecionar para dashboard
            router.push('/dashboard');
        } catch (err) {
            const message = getErrorMessage(err);
            setError(message);
            throw new Error(message);
        } finally {
            setIsLoading(false);
        }
    };

    const register = async (data: RegisterData) => {
        try {
            setIsLoading(true);
            setError(null);

            const response = await authService.register(data);

            setUser(response.user);
            setToken(response.token);

            // Redirecionar para dashboard
            router.push('/dashboard');
        } catch (err) {
            const message = getErrorMessage(err);
            setError(message);
            throw new Error(message);
        } finally {
            setIsLoading(false);
        }
    };

    const logout = async () => {
        try {
            setIsLoading(true);
            await authService.logout();
        } catch (err) {
            console.error('Erro ao fazer logout:', err);
        } finally {
            setUser(null);
            setToken(null);
            setIsLoading(false);
            router.push('/login');
        }
    };

    const updateUser = (updatedUser: User) => {
        setUser(updatedUser);
        localStorage.setItem('user', JSON.stringify(updatedUser));
    };

    const clearError = () => {
        setError(null);
    };

    const value: AuthContextType = {
        user,
        token,
        isAuthenticated: !!user && !!token,
        isLoading,
        login,
        register,
        logout,
        updateUser,
        error,
        clearError,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth deve ser usado dentro de um AuthProvider');
    }
    return context;
}
