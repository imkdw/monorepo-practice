import { Global, Module } from '@nestjs/common';
import PrismaService from '@server/infra/database/prisma.service';

@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export default class DatabaseModule {}
