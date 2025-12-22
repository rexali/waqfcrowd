// Mock messages between users
export type Message = {
    messageId: string;
    subject?: string;
    body: string;
    fromUserId: string;
    toUserId: string;
    waqfId?: string | null;
    isRead: boolean;
    createdAt: string;
};

export const mockMessages: Message[] = [
    {
        messageId: 'msg_7001',
        subject: 'Volunteer opportunity',
        body: 'Hi, I would like to volunteer for the library workshops. Please share next steps.',
        fromUserId: 'usr_200',
        toUserId: 'usr_300',
        waqfId: 'wqf_002',
        isRead: false,
        createdAt: '2025-11-20T14:35:00Z',
    },
    {
        messageId: 'msg_7002',
        subject: 'Donation Receipt',
        body: 'Thank you for your donation. Your receipt is attached.',
        fromUserId: 'system',
        toUserId: 'usr_101',
        waqfId: 'wqf_003',
        isRead: true,
        createdAt: '2025-09-01T07:10:00Z',
    },
];

export function getMessagesForUser(userId: string) {
    return mockMessages.filter((m) => m.toUserId === userId || m.fromUserId === userId).sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
}

export function getMessageById(id: string) {
    return mockMessages.find((m) => m.messageId === id);
}
