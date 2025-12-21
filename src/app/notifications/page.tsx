'use client'

import * as React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import NotificationList from './notification-list';
import { useNotification } from '@/hooks/use-notification';
import Box from '@mui/material/Box';
import ProtectedRoute from '@/components/protected-route';
import { useNotifications } from '@/hooks/use-notifications';

export default function Notifications() {
    const notifications = useNotifications();

    if (!notifications.length) {

        return (
            <Container style={{minHeight:"360px",  alignContent:'center'}} sx={{ mt: 8 }} component={"main"} maxWidth="md">
                <Box textAlign={'center'}>No notification(s) found</Box>
            </Container>
        )
    }

    return (
        <ProtectedRoute>
            <Container style={{minHeight:"360px"}} sx={{ mt: 8 }} component={"main"} maxWidth="md">
                <Grid container columnSpacing={1}>
                    <NotificationList notifications={notifications} />
                </Grid>
            </Container>
        </ProtectedRoute>
    );
}