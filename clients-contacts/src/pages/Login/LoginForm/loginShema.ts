import { z } from 'zod'

export const loginSchema = z.object({
  email: z.string().email('Must have a e-mail'),
  password: z.string().nonempty('Password required')
});

export type LoginData = z.infer<typeof loginSchema>;