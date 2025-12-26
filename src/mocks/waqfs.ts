// Mock data and types for WaqfCard component (moved to central mocks folder)
// Usage: import { mockWaqfs } from '@/mocks/waqfs';

import { getCommentsByWaqfId } from "./comments";
import { getUpdatesByWaqfId } from "./updates";

export type Waqf = {
    waqfId: string;
    name: string;
    description?: string;
    userId: string; // owner
    userIds: string[]; // users who saved/favourited
    purpose: string;
    totalDonation?: number;
    expectedAmount?: number;
    updatesNo?: number;
    commentsNo?: number;
    createdAt?: string;
    updatedAt?: string;
    coverImage?: string; // relative path or url
};

export const mockWaqfs: Waqf[] = [
    {
        waqfId: 'wqf_001',
        name: 'Clean Water Project - Kano',
        purpose: 'Health & Hygiene',
        description:
            'Drilling and maintenance of three boreholes to provide clean water to two communities in Kano state. Project includes local training and upkeep fund.',
        userId: 'usr_100',
        userIds: ['usr_100', 'usr_101', 'usr_102'],
        totalDonation: 125000,
        expectedAmount: 500000,
        updatesNo: getUpdatesByWaqfId('wqf_001').length ?? 0,
        commentsNo: getCommentsByWaqfId('wqf_001').length ?? 0,
        createdAt: '2025-11-30T09:00:00Z',
        coverImage: '/assets/images/awf-logo.png',
    },
    {
        waqfId: 'wqf_002',
        name: 'Community Library & Learning Center',
        purpose: 'Library',
        description:
            'Create a community library with study spaces and workshops focused on literacy and digital skills for youth.',
        userId: 'usr_200',
        userIds: ['usr_300'],
        totalDonation: 75000,
        expectedAmount: 200000,
        updatesNo: getUpdatesByWaqfId('wqf_002').length ?? 0,
        commentsNo: getCommentsByWaqfId('wqf_002').length ?? 0,
        createdAt: '2025-10-15T08:30:00Z',
        coverImage: '/assets/images/library.png',
    },
    {
        waqfId: 'wqf_003',
        name: 'Scholarship Fund for Girls',
        purpose: 'Education',
        description:
            'Annual scholarships for girls from low-income families to attend secondary school and vocational training.',
        userId: 'usr_300',
        userIds: [],
        totalDonation: 48000,
        expectedAmount: 120000,
        updatesNo: getUpdatesByWaqfId('wqf_003').length ?? 0,
        commentsNo: getCommentsByWaqfId('wqf_003').length ?? 0,
        createdAt: '2025-01-20T11:15:00Z',
        coverImage: '/assets/images/scholarship.png',
    },
    {
        waqfId: 'wqf_004',
        name: 'Mobile Health Clinic - Rural Outreach',
        purpose: 'Health & Hygiene',
        description:
            'Equip a mobile clinic to visit remote villages monthly for primary health services and maternal care.',
        userId: 'usr_400',
        userIds: ['usr_101', 'usr_102', 'usr_103', 'usr_400'],
        totalDonation: 300000,
        expectedAmount: 450000,
        updatesNo: getUpdatesByWaqfId('wqf_004').length ?? 0,
        commentsNo: getCommentsByWaqfId('wqf_004').length ?? 0,
        createdAt: '2025-08-05T14:00:00Z',
        coverImage: '/assets/images/clinic.png',
    },
];

// Helper: find waqf by id
export function getMockWaqfById(id: string): Waqf | undefined {
    return mockWaqfs.find((w) => w.waqfId === String(id));
}

// Example usage:
// import { mockWaqfs, getMockWaqfById } from '@/mocks/waqfs';
// const waqfs = mockWaqfs; // render list
// const one = getMockWaqfById('wqf_001');
