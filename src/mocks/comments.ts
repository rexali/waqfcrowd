// Mock comments for waqf comments UI
export type Comment = {
    commentId: string;
    waqfId: string;
    userId: string;
    body: string;
    createdAt: string;
    repliesNo: number;
    parentId?: string | null;
};


export const mockComments: Comment[] = [
    { 
        commentId: 'cmt_1001',
        waqfId: 'wqf_001',
        userId: 'usr_101',
        body: 'This project is amazing — glad to see the community coming together.',
        createdAt: '2025-12-18T10:24:00Z',
        repliesNo: 1,
        parentId: null,
    },
    {
        commentId: 'cmt_1002',
        waqfId: 'wqf_001',
        userId: 'usr_102',
        body: 'Any update on the borehole completion date?',
        createdAt: '2025-12-19T08:15:00Z',
        repliesNo: 1,
        parentId: null,
    },
    {
        commentId: 'cmt_1003',
        waqfId: 'wqf_002',
        userId: 'usr_300',
        body: 'How can I volunteer for the library workshops?',
        createdAt: '2025-11-05T09:50:00Z',
        repliesNo: 0,
        parentId: null,
    },
    {
        commentId: 'cmt_1004',
        waqfId: 'wqf_001',
        userId: 'usr_103',
        body: 'Reply: We expect drilling to finish by January.',
        createdAt: '2025-12-19T12:00:00Z',
        repliesNo: 1,
        parentId: 'cmt_1002',
    },
];

export function getCommentsByWaqfId(waqfId: string): Comment[] {
    return mockComments.filter((c) => c.waqfId === waqfId && !c.parentId);
}

