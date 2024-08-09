import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import TrpcModule from './trpc/trpc.module';
import DatabaseModule from '@server/infra/database/database.module';

@Module({
  imports: [TrpcModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
