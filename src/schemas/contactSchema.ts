import { z } from 'zod';

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, 'Nome deve ter pelo menos 2 caracteres')
    .max(100, 'Nome deve ter no máximo 100 caracteres')
    .regex(/^[a-zA-ZÀ-ÿ\s]+$/, 'Nome deve conter apenas letras e espaços')
    .transform(val => val.trim()),
    
  email: z
    .string()
    .email('Email inválido')
    .max(254, 'Email muito longo')
    .transform(val => val.trim().toLowerCase()),
    
  project: z
    .string()
    .min(3, 'Tipo de necessidade deve ter pelo menos 3 caracteres')
    .max(200, 'Tipo de necessidade deve ter no máximo 200 caracteres')
    .transform(val => val.trim()),
    
  message: z
    .string()
    .min(10, 'Mensagem deve ter pelo menos 10 caracteres')
    .max(2000, 'Mensagem deve ter no máximo 2000 caracteres')
    .transform(val => val.trim()),
    
  // Honeypot field - should always be empty
  website: z
    .string()
    .max(0, 'Campo inválido')
    .optional()
    .default('')
});

export type ContactFormData = z.infer<typeof contactSchema>;