import { Global, Module } from '@nestjs/common';
import TrpcService from './trpc.service';
import TrpcRouter from '@server/trpc/trpc.router';
import QnaModule from '@server/qna/qna.module';

@Global()
@Module({
  imports: [QnaModule],
  providers: [TrpcService, TrpcRouter],
})
export default class TrpcModule {}
