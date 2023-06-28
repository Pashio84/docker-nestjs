// Import application common modules
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Module } from '@nestjs/common';

// Import unique modules
import { AuthModule } from './auth/auth.module';
import { MailModule } from './mail/mail.module';
import { AppI18nModule } from './i18n/i18n.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [AuthModule, MailModule, AppI18nModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
