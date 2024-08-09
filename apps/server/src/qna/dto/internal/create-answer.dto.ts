import { z } from 'zod';

export const createAnswerSchema = z.object({
  questionId: z.number(),
  name: z.string(),
  password: z.string(),
  content: z.string(),
});

export type CreateAnswerDto = z.infer<typeof createAnswerSchema>;
