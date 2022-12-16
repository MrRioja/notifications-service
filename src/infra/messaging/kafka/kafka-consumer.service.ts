import { ServerKafka } from '@nestjs/microservices';
import { Injectable, OnModuleDestroy } from '@nestjs/common';

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        clientId: 'notifications',
        brokers: [process.env.KAFKA_BROKER as string],
        sasl: {
          mechanism: 'scram-sha-256',
          username: process.env.KAFKA_USERNAME as string,
          password: process.env.KAFKA_PASSWORD as string,
        },
        ssl: true,
      },
    });
  }

  async onModuleDestroy() {
    await this.close();
  }
}
