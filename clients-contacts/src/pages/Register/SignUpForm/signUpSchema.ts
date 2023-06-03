import { z } from 'zod'

export const registerSchema = z.object({
  name: z.string(),
  email: z.string().email('Must have a e-mail'),
  password: z.string().nonempty('Password required'),
  telephone: z.string(),
});

export type RegisterData = z.infer<typeof registerSchema>;