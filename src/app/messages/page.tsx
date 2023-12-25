'use client'

import * as React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import MessageList from './message-list';
import { useMessages } from '@/hooks/use-messages';
import Box from '@mui/material/Box';
import ProtectedRoute from '@/components/protected-route';

export default function MessagesPage() {
    
    const {messages} = useMessages();

    if (!messages.length) {

        return (
            <Container sx={{ mt: 8 }} component={"main"} maxWidth="md">
                <Box textAlign={'center'}>No message(s) found</Box>
            </Container>
        )
    }

    return (
        <ProtectedRoute>
            <Container sx={{ mt: 8 }} component={"main"} maxWidth="md">
                <Grid container columnSpacing={1}>
                    <MessageList messages={messages} />
                </Grid>
            </Container>
        </ProtectedRoute>
    );
}