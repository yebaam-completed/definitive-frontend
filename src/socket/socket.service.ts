import { io, Socket } from 'socket.io-client';

export class SocketService {
  public socket: Socket | null = null;

  setupSocketConnection() {
    this.socket = io('http://localhost:5000', {
      transports: ['websocket'],
      secure: true,
    
    });
    this.socketConnectionEvents();
  }

  private socketConnectionEvents() {
    this.socket?.on('connect', () => {
      console.log('Connected to server');
    });

    this.socket?.on('disconnect', (reason: Socket.DisconnectReason) => {
      console.log(`Reason: ${reason}`);
      this.socket?.connect();
    });

    this.socket?.on('connect_error', (error: Error) => {
      console.log(error);
      console.log(`${error}`);
      this.socket?.connect();
    });
  }
}

export const socketService = new SocketService();
