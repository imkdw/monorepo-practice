import { Module } from '@nestjs/common';
import QnaService from '@server/qna/qna.service';

@Module({
  providers: [QnaService],
  exports: [QnaService],
})
export default class QnaModule {}
