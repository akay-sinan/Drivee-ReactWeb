const express = require('express');
const http = require('http');
const WebSocket = require('ws');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
  console.log('WebSocket connected');

  // RabbitMQ'dan gelen mesajları WebSocket üzerinden React uygulamasına iletim
  // Mesajları 'message' eventiyle WebSocket'e gönderelim
  // Bu örnek, WebSocket'e gelen her mesajı tüm bağlantılara yayınlıyor
  // Gerçek bir uygulama geliştirirken bu kısmı ihtiyaca göre özelleştirebilirsiniz
  rabbitmqListener.on('message', (message) => {
    ws.send(message);
  });
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`WebSocket server is running on http://localhost:${PORT}`);
});
