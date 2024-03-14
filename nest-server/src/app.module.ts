import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PageModule } from './page/page.module';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    PageModule,
    UserModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '7455198',
      database: 'customer_order',
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
