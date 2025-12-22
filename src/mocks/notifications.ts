// Mock notifications for a user
export type Notification = {
    notificationId: string;
    userId: string; // recipient
    type: 'comment' | 'donation' | 'update' | 'system' | 'message';
    title: string;
    body?: string;
    relatedId?: string | null; // commentId, waqfId, messageId etc
    isRead: boolean;
    createdAt: string;
};

export const mockNotifications: Notification[] = [
    {
        notificationId: 'ntf_5001',
        userId: 'usr_100',
        type: 'comment',
        title: 'New comment on your waqf',
        body: 'User usr_101 commented on Clean Water Project - Kano.',
        relatedId: 'cmt_1001',
        isRead: false,
        createdAt: '2025-12-18T10:25:00Z',
    },
    {
        notificationId: 'ntf_5002',
        userId: 'usr_100',
        type: 'donation',
        title: 'New donation received',
        body: 'A donation of N10,000 was received for your project.',
        relatedId: 'wqf_001',
        isRead: true,
        createdAt: '2025-12-10T09:00:00Z',
    },
    {
        notificationId: 'ntf_5003',
        userId: 'usr_300',
        type: 'message',
        title: 'New message',
        body: 'You have a new message from usr_200.',
        relatedId: 'msg_7001',
        isRead: false,
        createdAt: '2025-11-20T14:40:00Z',
    },
];

export function getNotificationsForUser(userId: string) {
    return mockNotifications.filter((n) => n.userId === userId).sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
}
