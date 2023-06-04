import { z } from 'zod'

export const registerSchema = z.object({
  name: z.string().nonempty('required'),
  email: z.string().email('required'),
  password: z.string().nonempty('required'),
  telephone: z.string().nonempty('required'),
});

export type RegisterData = z.infer<typeof registerSchema>;