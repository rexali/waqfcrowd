'use client'

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function Resources(props: any) {
    return (
        <div style={{minHeight:"360px",  alignContent:'center', textAlign:'center'}}>
            <Card sx={{ maxWidth: 345, marginTop: 10 }}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.message}
                    </Typography>
                </CardContent>
            </Card>
        </div>

    );
}