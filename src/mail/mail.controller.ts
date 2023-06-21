import { Controller, Get, HttpCode } from '@nestjs/common';
import { MailService } from './mail.service';

@Controller('mail')
export class MailController {
  constructor(private readonly mailService: MailService) {}

  @Get()
  @HttpCode(202)
  async sendMailTest(): Promise<void> {
    await this.mailService.example(
      ['nestjs1@example.com', 'nestjs2@example.com'],
      'Example subject',
      'NestJS',
    );
  }
}
