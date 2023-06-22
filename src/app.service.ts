import { Injectable } from '@nestjs/common';
import { I18nContext } from 'nestjs-i18n';

@Injectable()
export class AppService {
  async getHello(i18n: I18nContext): Promise<string> {
    return await i18n.t('example.HELLO');
  }
}
