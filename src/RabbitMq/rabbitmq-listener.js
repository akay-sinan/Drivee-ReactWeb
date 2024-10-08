const EventEmitter = require('events');
const amqp = require('amqplib');

class RabbitMQListener extends EventEmitter {
  async connectRabbitMQ() {
    const connection = await amqp.connect('amqp://localhost');
    const channel = await connection.createChannel();

    const exchange = 'database_changes';
    const queue = 'database_listener';

    await channel.assertExchange(exchange, 'fanout', { durable: false });
    const q = await channel.assertQueue(queue, { exclusive: true });
    channel.bindQueue(q.queue, exchange, '');

    console.log(`Waiting for database changes. To exit press CTRL+C`);

    channel.consume(queue, (msg) => {
      const content = msg.content.toString();
      console.log(`Received database change: ${content}`);
      // RabbitMQ'dan gelen mesajları EventEmitter üzerinden yayınla
      this.emit('message', content);
    }, { noAck: true });
  }
}

const rabbitmqListener = new RabbitMQListener();
rabbitmqListener.connectRabbitMQ();
