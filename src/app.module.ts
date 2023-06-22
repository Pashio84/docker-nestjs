// Application common modules
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Module } from '@nestjs/common';

// Unique modules
import { AuthModule } from './auth/auth.module';
import { MailModule } from './mail/mail.module';
import { AppI18nModule } from './i18n/i18n.module';

@Module({
  imports: [AuthModule, MailModule, AppI18nModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
