// Application common modules
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Module } from '@nestjs/common';

// Unique modules
import { AuthModule } from './auth/auth.module';
import { MailModule } from './mail/mail.module';

@Module({
  imports: [AuthModule, MailModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
