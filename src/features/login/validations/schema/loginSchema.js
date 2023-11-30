import z from 'zod';

export const loginSchema = z.object({
  email: z
    .string({
      required_error: 'El correo electrónico es requerido.'
    })
    .email({
      message: 'El correo electrónico ingresado no es válido.'
    }),
  password: z
    .string({
      required_error: 'La contraseña es requerida.'
    })
    .min(6, {
      message: 'La contraseña debe contener al menos 6 caracteres.'
    }).max(40, {
      message: 'La contraseña no puede contener más de 40 caracteres.'
    })
});
