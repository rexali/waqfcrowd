"use client"

import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Copyright from '@/components/common/copyright';
import { makePayment } from '../utils/makePayment';
import { saveWaqfData } from '../utils/saveWaqfData';
import { getToken } from '@/utils/getToken';

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function DonateForm({ waqfId }: { waqfId: any }) {

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const data = new FormData(event.currentTarget);
            const supportData = {
                email: data.get('email'),
                amount: parseInt(data.get('amount') as string) * 100,
                waqfId: waqfId,
                userId: getToken("userId"),
            };
            saveWaqfData(supportData);
            await makePayment(supportData.amount, supportData.email);
        } catch (error) {
            console.warn(error);
        }
    };

    return (
        <ThemeProvider theme={defaultTheme} >
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Typography component="h1" variant="h5" >
                        Bank details: donate now
                    </Typography>

                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>

                        <Typography component="h1" variant="h5" sx={{ fontSize: 16 }} >
                            BANK: GTBANK
                        </Typography>

                        <Typography component="h1" variant="h5" sx={{ fontSize: 16 }} >
                            Account No.: 0020345409
                        </Typography>

                        <Typography component="h1" variant="h5" sx={{ fontSize: 16 }} >
                            Account Name:Almubarak Waqf Foundation
                        </Typography><br />

                        <Typography component="h1" variant="h6" textAlign={'center'}>
                            Or
                        </Typography>

                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            placeholder="Enter email address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />

                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="amount"
                            placeholder="Enter amount"
                            type="number"
                            id="amount"
                        />

                        <Button
                            type="submit"
                            fullWidth
                            color='success'
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Checkout
                        </Button>

                    </Box>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </ThemeProvider>
    );
}