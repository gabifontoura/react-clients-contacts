import { z } from "zod";

export const updateSchema = z
  .object({
    name: z.string(),
    email: z.string(),
    telephone: z.string(),
  })
  .partial();

export type CreateContactData = z.infer<typeof updateSchema>;
