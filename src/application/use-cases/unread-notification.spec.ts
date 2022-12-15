import { UnreadNotification } from './unread-notification';
import { NotificationNotFound } from './errors/notifications-not-found';
import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';

describe('Unread Notification', () => {
  it('should be able to unread a notification', async () => {
    const notificationRepository = new InMemoryNotificationsRepository();
    const unreadNotification = new UnreadNotification(notificationRepository);

    const notification = makeNotification({ readAt: new Date() });

    await notificationRepository.create(notification);

    await unreadNotification.execute({
      notificationId: notification.id,
    });

    expect(notificationRepository.notifications[0].readAt).toBeNull();
  });

  it('should not be able to unread a non existing notification', async () => {
    const notificationRepository = new InMemoryNotificationsRepository();
    const unreadNotification = new UnreadNotification(notificationRepository);

    expect(() => {
      return unreadNotification.execute({
        notificationId: 'non-existing-notification',
      });
    }).rejects.toBeInstanceOf(NotificationNotFound);
  });
});
