'use client'

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from 'next/link';
import Image from 'next/image';
import { findDateDifference } from '@/utils/findDateDifference';
import Box from '@mui/material/Box';

export default function NewsItem({
    news,
}: { news: any }) {
    return (
        <Card sx={{ marginTop: 10, maxWidth: 345 }} key={news.id} >
            <CardContent>
                <Grid container columnSpacing={1}>
                    <Grid item xs={12} md={3}>
                        <Link href={news.link ? news.link : ""} target='blank'>
                            <Image
                                height={50}
                                width={50}
                                src={require("../../assets/images/awf-logo.png")}
                                title="green iguana"
                                alt={'image'}
                            />
                        </Link>
                    </Grid>
                    <Grid item xs={12} md={9}>
                        <Typography gutterBottom variant="h5" component="div" noWrap textOverflow={'ellipsis'}>
                            {news.title?.rendered}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {findDateDifference(news.date?.split('T')[0])}
                        </Typography>
                    </Grid>
                </Grid>
                <Box textAlign={'right'}>
                    <Link href={news.link ? news.link : ""} target='blank' style={{ textDecoration: 'none' }}>View</Link>
                </Box>
            </CardContent>
        </Card>
    );
}