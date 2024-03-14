import { Module } from '@nestjs/common';
import { PageService } from './page.service';
import { PageGateway } from './page.gateway';

// import { Server } from 'socket.io';

@Module({
  //PageGateway
  providers: [PageGateway, PageService],
})
export class PageModule {}
