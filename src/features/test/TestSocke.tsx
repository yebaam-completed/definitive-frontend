import React, { useEffect, useState } from 'react';
import { socketService } from '../../socket/socket.service';

const TestSocke = () => {
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    if (!socketService.socket) {
      console.log('Socket not initialized');
      return;
    }

    // Escucha el evento de notificación desde el servidor
    socketService.socket.on('notification', (data: string) => {
      console.log('Notification received:', data);
      setMessage(data);
    });

    // Opcional: Limpia el evento al desmontar el componente
    return () => {
      socketService.socket?.off('notification');
    };
  }, []);

  return (
    <div>
      <h2>Test Socket Component</h2>
      <p>{message ? `Received notification: ${message}` : 'No notifications yet.'}</p>
    </div>
  );
};

export default TestSocke;
