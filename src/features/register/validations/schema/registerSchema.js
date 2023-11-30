import z from 'zod';

export const registerSchema = z.object({
  username: z.string({
    required_error: 'El nombre de usuario es requerido.'
  })
    .min(4, {
      message: 'El nombre de usuario debe contener al menos 4 caracteres.'
    })
    .max(20, {
      message: 'El nombre de usuario no puede contener más de 20 caracteres.'
    }),
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
