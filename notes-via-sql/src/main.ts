import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {AppController} from './app.controller';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const controller = app.get(AppController);
  controller.getHello()

}
bootstrap();
