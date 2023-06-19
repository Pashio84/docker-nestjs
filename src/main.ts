import * as fs from 'fs';
import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { dump } from 'js-yaml';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Swagger output settings
  const config = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  process.env.API_DOCUMENT_DIR !== undefined &&
    fs.writeFileSync(
      join(process.env.API_DOCUMENT_DIR, 'swagger.yaml'),
      dump(document, {}),
    );
  SwaggerModule.setup('api', app, document); // Enable `/api` and `/api-json` path for Swagger UI

  await app.listen(3000);
}
bootstrap();
