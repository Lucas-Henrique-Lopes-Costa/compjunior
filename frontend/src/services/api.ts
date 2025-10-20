import axios, { AxiosInstance, AxiosError } from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

// Criar instância do axios
const api: AxiosInstance = axios.create({
    baseURL: API_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Interceptor de requisição - adicionar token
api.interceptors.request.use(
    (config) => {
        // Pegar token do localStorage
        if (typeof window !== 'undefined') {
            const token = localStorage.getItem('token');
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Interceptor de resposta - tratamento de erros
api.interceptors.response.use(
    (response) => {
        return response;
    },
    (error: AxiosError) => {
        // Tratamento de erro 401 - não autorizado
        if (error.response?.status === 401) {
            // Limpar token e redirecionar para login
            if (typeof window !== 'undefined') {
                localStorage.removeItem('token');
                localStorage.removeItem('user');
                window.location.href = '/login';
            }
        }

        // Tratamento de erro 403 - sem permissão
        if (error.response?.status === 403) {
            console.error('Acesso negado: você não tem permissão para esta ação');
        }

        // Tratamento de erro de rede
        if (!error.response) {
            console.error('Erro de rede: verifique sua conexão');
        }

        return Promise.reject(error);
    }
);

// Helper para upload de arquivos
export const apiFormData: AxiosInstance = axios.create({
    baseURL: API_URL,
    timeout: 30000, // 30s para upload de imagens
    headers: {
        'Content-Type': 'multipart/form-data',
    },
});

// Adicionar token ao apiFormData também
apiFormData.interceptors.request.use(
    (config) => {
        if (typeof window !== 'undefined') {
            const token = localStorage.getItem('token');
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default api;

// Tipos para tratamento de erro
export interface ApiError {
    message: string;
    statusCode?: number;
    errors?: string[];
}

// Helper para extrair mensagem de erro
export const getErrorMessage = (error: unknown): string => {
    if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError<ApiError>;
        return (
            axiosError.response?.data?.message ||
            axiosError.message ||
            'Erro desconhecido'
        );
    }
    if (error instanceof Error) {
        return error.message;
    }
    return 'Erro desconhecido';
};

// Helper para extrair erros de validação
export const getValidationErrors = (error: unknown): string[] => {
    if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError<ApiError>;
        return axiosError.response?.data?.errors || [];
    }
    return [];
};
