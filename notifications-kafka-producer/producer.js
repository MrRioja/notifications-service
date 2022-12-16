import { Kafka } from 'kafkajs';
import { randomUUID } from 'crypto';

async function bootstrap() {
  const kafka = new Kafka({
    brokers: ['YOUR_KAFKA_BROKER_HERE'],
    sasl: {
      mechanism: 'scram-sha-256',
      username: 'YOUR_KAFKA_USERNAME_HERE',
      password: 'YOUR_KAFKA_PASSWORD_HERE',
    },
    ssl: true,
  });

  const producer = kafka.producer();

  await producer.connect();

  await producer.send({
    topic: 'notifications.send-notification',
    messages: [
      {
        value: JSON.stringify({
          category: 'Test Kafka producer category',
          content: 'Test Kafka producer content',
          recipientId: randomUUID(),
        }),
      },
    ],
  });

  await producer.disconnect();
}

bootstrap();
