import { z } from 'zod';
import { UserRole } from '@/types';

// Validação de Login
export const loginSchema = z.object({
    email: z
        .string()
        .min(1, 'Email é obrigatório')
        .email('Email inválido'),
    password: z
        .string()
        .min(1, 'Senha é obrigatória')
        .min(6, 'A senha deve ter no mínimo 6 caracteres'),
});

export type LoginFormData = z.infer<typeof loginSchema>;

// Validação de Registro
export const registerSchema = z.object({
    name: z
        .string()
        .min(1, 'Nome é obrigatório')
        .min(3, 'O nome deve ter no mínimo 3 caracteres')
        .max(100, 'O nome deve ter no máximo 100 caracteres'),
    email: z
        .string()
        .min(1, 'Email é obrigatório')
        .email('Email inválido'),
    password: z
        .string()
        .min(1, 'Senha é obrigatória')
        .min(6, 'A senha deve ter no mínimo 6 caracteres')
        .max(50, 'A senha deve ter no máximo 50 caracteres')
        .regex(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
            'A senha deve conter ao menos uma letra maiúscula, uma minúscula e um número'
        ),
    confirmPassword: z
        .string()
        .min(1, 'Confirmação de senha é obrigatória'),
    role: z.nativeEnum(UserRole, {
        message: 'Selecione um tipo de usuário válido',
    }),
}).refine((data) => data.password === data.confirmPassword, {
    message: 'As senhas não coincidem',
    path: ['confirmPassword'],
});

export type RegisterFormData = z.infer<typeof registerSchema>;

// Validação de Recuperação de Senha
export const forgotPasswordSchema = z.object({
    email: z
        .string()
        .min(1, 'Email é obrigatório')
        .email('Email inválido'),
});

export type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>;

// Validação de Reset de Senha
export const resetPasswordSchema = z.object({
    token: z.string().min(1, 'Token é obrigatório'),
    newPassword: z
        .string()
        .min(1, 'Nova senha é obrigatória')
        .min(6, 'A senha deve ter no mínimo 6 caracteres')
        .max(50, 'A senha deve ter no máximo 50 caracteres')
        .regex(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
            'A senha deve conter ao menos uma letra maiúscula, uma minúscula e um número'
        ),
    confirmPassword: z
        .string()
        .min(1, 'Confirmação de senha é obrigatória'),
}).refine((data) => data.newPassword === data.confirmPassword, {
    message: 'As senhas não coincidem',
    path: ['confirmPassword'],
});

export type ResetPasswordFormData = z.infer<typeof resetPasswordSchema>;

// Validação de Atualização de Senha
export const updatePasswordSchema = z.object({
    currentPassword: z
        .string()
        .min(1, 'Senha atual é obrigatória'),
    newPassword: z
        .string()
        .min(1, 'Nova senha é obrigatória')
        .min(6, 'A senha deve ter no mínimo 6 caracteres')
        .max(50, 'A senha deve ter no máximo 50 caracteres')
        .regex(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
            'A senha deve conter ao menos uma letra maiúscula, uma minúscula e um número'
        ),
    confirmPassword: z
        .string()
        .min(1, 'Confirmação de senha é obrigatória'),
}).refine((data) => data.newPassword === data.confirmPassword, {
    message: 'As senhas não coincidem',
    path: ['confirmPassword'],
});

export type UpdatePasswordFormData = z.infer<typeof updatePasswordSchema>;

// Validação de Check-in
export const checkInSchema = z.object({
    photo: z
        .instanceof(File)
        .refine((file) => file.size <= 5 * 1024 * 1024, 'A foto deve ter no máximo 5MB')
        .refine(
            (file) => ['image/jpeg', 'image/png', 'image/webp'].includes(file.type),
            'Formato inválido. Use JPEG, PNG ou WebP'
        ),
    latitude: z
        .number()
        .min(-90, 'Latitude inválida')
        .max(90, 'Latitude inválida'),
    longitude: z
        .number()
        .min(-180, 'Longitude inválida')
        .max(180, 'Longitude inválida'),
    seasonId: z.string().min(1, 'Temporada é obrigatória'),
});

export type CheckInFormData = z.infer<typeof checkInSchema>;

// Validação de Temporada
export const seasonSchema = z.object({
    name: z
        .string()
        .min(1, 'Nome é obrigatório')
        .min(3, 'O nome deve ter no mínimo 3 caracteres')
        .max(100, 'O nome deve ter no máximo 100 caracteres'),
    description: z
        .string()
        .max(500, 'A descrição deve ter no máximo 500 caracteres')
        .optional(),
    startDate: z.coerce.date({
        message: 'Data de início é obrigatória',
    }),
    endDate: z.coerce.date({
        message: 'Data de término é obrigatória',
    }),
    pointsPerCheckIn: z
        .number()
        .min(1, 'Pontos por check-in deve ser no mínimo 1')
        .max(1000, 'Pontos por check-in deve ser no máximo 1000')
        .int('Pontos por check-in deve ser um número inteiro'),
}).refine((data) => data.endDate > data.startDate, {
    message: 'A data de término deve ser posterior à data de início',
    path: ['endDate'],
});

export type SeasonFormData = z.infer<typeof seasonSchema>;
