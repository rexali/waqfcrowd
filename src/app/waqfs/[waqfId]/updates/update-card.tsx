'use client'

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function UpdateCard({
    title = "Welcome",
    body = "Waqf is an Islamic endowment",
}: { title: any, body: any}) {
    return (
        <Card sx={{ maxWidth: 345, marginTop: 2 }}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {body}
                </Typography>
            </CardContent>
        </Card>
    );
}