import { Content } from './content';
import { Notification } from './notification';

describe('Notification', () => {
  it('should be able to create a notification content', () => {
    const notification = new Notification({
      category: 'Category test',
      recipientId: 'recipient-id',
      content: new Content('Content test'),
    });

    expect(notification).toBeTruthy();
  });
});
