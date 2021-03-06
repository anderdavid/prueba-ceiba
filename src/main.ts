import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log('hello');
  await app.listen(process.env.PORT || '8001');
}
bootstrap();
