import { Injectable } from '@nestjs/common';
import PrismaService from '@server/infra/database/prisma.service';
import { CreateAnswerDto } from '@server/qna/dto/internal/create-answer.dto';
import { CreateQuestionDto } from '@server/qna/dto/internal/create-question.dto';

@Injectable()
export default class QnaService {
  constructor(private readonly prisma: PrismaService) {}

  async createQuestion(dto: CreateQuestionDto) {
    return this.prisma.qna.create({ data: dto });
  }

  async createAnswer(dto: CreateAnswerDto) {
    return this.prisma.qnaAnswer.create({ data: dto });
  }

  async getQuestions() {
    return this.prisma.qna.findMany();
  }

  async getAnswers(questionId: number) {
    return this.prisma.qnaAnswer.findMany({ where: { questionId } });
  }
}
