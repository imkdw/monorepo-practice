import { INestApplication, Injectable } from '@nestjs/common';
import { z } from 'zod';
import * as trpcExpress from '@trpc/server/adapters/express';
import TrpcService from '@server/trpc/trpc.service';
import { createQuestionSchema } from '@server/qna/dto/internal/create-question.dto';
import QnaService from '@server/qna/qna.service';
import { createAnswerSchema } from '@server/qna/dto/internal/create-answer.dto';

@Injectable()
export default class TrpcRouter {
  constructor(
    private readonly trpc: TrpcService,
    private readonly qnaService: QnaService,
  ) {}

  appRouter = this.trpc.router({
    createQuestion: this.trpc.procedure
      .input(createQuestionSchema)
      .query(async ({ input }) => {
        return this.qnaService.createQuestion(input);
      }),
    getQuestions: this.trpc.procedure.query(async () => {
      return this.qnaService.getQuestions();
    }),
    getAnswers: this.trpc.procedure
      .input(z.number())
      .query(async ({ input }) => {
        return this.qnaService.getAnswers(input);
      }),
    createAnswer: this.trpc.procedure
      .input(createAnswerSchema)
      .query(async ({ input }) => {
        return this.qnaService.createAnswer(input);
      }),
  });

  async applyMiddleware(app: INestApplication) {
    app.use(
      `/trpc`,
      trpcExpress.createExpressMiddleware({
        router: this.appRouter,
      }),
    );
  }
}

export type AppRouter = TrpcRouter[`appRouter`];
