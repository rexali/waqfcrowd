// Replies derived from comments (separate module for easier imports)
import { Comment, mockComments } from './comments';

export type Reply = Comment;

// Derived replies from `mockComments` (comments that have a parentId)
const derivedReplies: Reply[] = mockComments.filter((c) => Boolean(c.parentId));

// Extra reply fixtures (additional reply records for testing)
const extraReplies: Reply[] = [
    {
        commentId: 'cmt_1004',
        waqfId: 'wqf_001',
        userId: 'usr_104',
        body: 'Great update — thanks for sharing progress!',
        createdAt: '2025-12-19T13:10:00Z',
        repliesNo: 0,
        parentId: 'cmt_1001',
    },
    {
        commentId: 'cmt_1005',
        waqfId: 'wqf_001',
        userId: 'usr_105',
        body: 'Can I contribute materials instead of cash?',
        createdAt: '2025-12-20T09:20:00Z',
        repliesNo: 1,
        parentId: 'cmt_1002',
    },
    {
        commentId: 'cmt_2002',
        waqfId: 'wqf_002',
        userId: 'usr_301',
        body: 'I can help run the digital skills sessions.',
        createdAt: '2025-11-07T10:00:00Z',
        repliesNo: 0,
        parentId: 'cmt_2001',
    },
    {
        commentId: 'cmt_1006',
        waqfId: 'wqf_001',
        userId: 'usr_106',
        body: "That's wonderful — keep us posted on completion.",
        createdAt: '2025-12-21T08:45:00Z',
        repliesNo: 0,
        parentId: 'cmt_1001',
    },
];

// Final mockReplies array used by helpers/tests
export const mockReplies: Reply[] = [...derivedReplies, ...extraReplies];

export function getRepliesForComment(commentId: string): Reply[] {
    return mockReplies.filter((r) => r.parentId === commentId);
}

export function getRepliesByWaqfId(waqfId: string): Reply[] {
    return mockReplies.filter((r) => r.waqfId === waqfId);
}

export function getAllReplies(): Reply[] {
    return mockReplies.slice();
}

// Example usage:
// import { mockReplies, getRepliesForComment } from '@/mocks/replies';
