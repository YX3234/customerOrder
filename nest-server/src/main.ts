import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { WsAdapter } from '@nestjs/platform-ws';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useWebSocketAdapter(new WsAdapter(app)); // 添加 WebSocket 适配器
  // 设置跨域访问
  const corsOptions: CorsOptions = {
    origin: true, // 允许的来源
    methods: ['GET', 'POST', 'PATCH', 'DELETE'],
    preflightContinue: false,
    optionsSuccessStatus: 204,
  };
  app.enableCors(corsOptions);

  await app.listen(3000);
}
bootstrap();
