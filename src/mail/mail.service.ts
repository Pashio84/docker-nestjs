import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class MailService {
  constructor(private readonly mailerService: MailerService) {}

  public async example(
    mailAddress: string[],
    subject: string,
    name: string,
  ): Promise<void> {
    await this.mailerService
      .sendMail({
        to: mailAddress,
        subject: subject,
        template: './example',
        context: { name: name },
      })
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      .then(() => {})
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      .catch(() => {});
  }
}
