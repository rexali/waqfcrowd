'use client'

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function ViewNotification({
    notification
}: { notification: any }) {
    return (
        <Card sx={{ maxWidth: 345, marginTop: 2 }}>
            <CardContent component={'a'} href={`/notifications/${notification?.notificationId}`}>
                <Typography gutterBottom variant="h5" component="div">
                    {notification?.subject}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {notification?.body}
                </Typography>
            </CardContent>
        </Card>
    );
}