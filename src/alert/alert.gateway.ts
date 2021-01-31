import { Logger } from '@nestjs/common';
import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway({
  namespace: '/alerts',
})
export class AlertGateway {
  private logger: Logger = new Logger('ChatGateway');

  @WebSocketServer() wss: Server;

  sendToAll(message: string) {
    this.wss.emit('alertToClient', { type: 'alert', message });
  }
}
