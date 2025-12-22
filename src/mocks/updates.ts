// Mock updates for waqf update feed
export type WaqfUpdate = {
    updateId: string;
    waqfId: string;
    authorId: string;
    title?: string;
    body: string;
    images?: string[];
    createdAt: string;
};

export const mockUpdates: WaqfUpdate[] = [
    {
        updateId: 'upd_3001',
        waqfId: 'wqf_001',
        authorId: 'usr_100',
        title: 'Drilling started',
        body: 'Drilling started on site A. The contractor arrived and started the first borehole.',
        images: ['/assets/images/drilling1.png'],
        createdAt: '2025-12-01T07:00:00Z',
    },
    {
        updateId: 'upd_3002',
        waqfId: 'wqf_001',
        authorId: 'usr_100',
        title: 'Pump Installation',
        body: 'Pump installation has begun for the first borehole.',
        images: ['/assets/images/pump.png'],
        createdAt: '2025-12-15T10:30:00Z',
    },
    {
        updateId: 'upd_4001',
        waqfId: 'wqf_004',
        authorId: 'usr_400',
        title: 'Vehicle Donated',
        body: 'A donor contributed a reliable van to be used as the mobile clinic vehicle.',
        images: ['/assets/images/van.png'],
        createdAt: '2025-08-10T12:00:00Z',
    },
];

export function getUpdatesByWaqfId(waqfId: string) {
    return mockUpdates.filter((u) => u.waqfId === waqfId).sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
}
