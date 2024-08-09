import { z } from 'zod';

export const createQuestionSchema = z.object({
  name: z.string(),
  password: z.string(),
  title: z.string(),
  content: z.string(),
});

export type CreateQuestionDto = z.infer<typeof createQuestionSchema>;
