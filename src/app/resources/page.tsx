'use client'

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function Resources({ title = "Welcome", message = "Waqf is an Islamic endowment" }: { title: any, message: any }) {
    return (
        <Card sx={{ maxWidth: 345, marginTop: 10 }}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {message}
                </Typography>
            </CardContent>
        </Card>
    );
}