import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
} from '@nestjs/websockets';
import { PageService } from './page.service';
import { CreatePageDto } from './dto/create-page.dto';
import { UpdatePageDto } from './dto/update-page.dto';
import { WebSocketServer } from '@nestjs/websockets';

@WebSocketGateway(4000)
export class PageGateway {
  @WebSocketServer()
  server;

  handleConnection(client: any) {
    console.log('Client connected');
  }

  handleDisconnect(client: any) {
    console.log('Client disconnected');
  }

  handleMessage(client: any, payload: any) {
    console.log('Received message:', payload);
    this.server.emit('message', payload);
  }
  constructor(private readonly pageService: PageService) {}

  @SubscribeMessage('createPage')
  create(@MessageBody() createPageDto: CreatePageDto) {
    return this.pageService.create(createPageDto);
  }

  @SubscribeMessage('findAllPage')
  findAll() {
    return this.pageService.findAll();
  }

  @SubscribeMessage('findOnePage')
  findOne(@MessageBody() id: number) {
    return this.pageService.findOne(id);
  }

  @SubscribeMessage('updatePage')
  update(@MessageBody() updatePageDto: UpdatePageDto) {
    return this.pageService.update(updatePageDto.id, updatePageDto);
  }

  @SubscribeMessage('removePage')
  remove(@MessageBody() id: number) {
    return this.pageService.remove(id);
  }
}
