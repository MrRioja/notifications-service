import { Module } from '@nestjs/common';

import { DatabaseModule } from '../database/database.module';
import { SendNotification } from '@application/use-cases/send-notification';
import { ReadNotification } from '@application/use-cases/read-notification';
import { UnreadNotification } from '@application/use-cases/unread-notification';
import { CancelNotification } from '@application/use-cases/cancel-notification';
import { NotificationsController } from './controllers/notifications.controller';
import { GetRecipientNotifications } from '@application/use-cases/get-recipient-notifications';
import { CountRecipientNotifications } from '@application/use-cases/count-recipient-notifications';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [
    SendNotification,
    ReadNotification,
    UnreadNotification,
    CancelNotification,
    GetRecipientNotifications,
    CountRecipientNotifications,
  ],
})
export class HttpModule {}
