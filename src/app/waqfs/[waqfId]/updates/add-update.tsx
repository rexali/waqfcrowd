"use client"

import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Copyright from '@/components/common/copyright';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import createTheme from '@mui/material/styles/createTheme';
import { handleUpdateSubmit } from './utils/addUpdate';
import { AuthContext } from '@/context/AuthContext';

const defaultTheme = createTheme();

export default function AddUpdate({ params }: { params: { waqfId: any } }) {
    const [success, setSuccess] = React.useState('');
    const [error, setError] = React.useState('');
    const { state: { user } } = React.useContext(AuthContext);

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
                    <Typography component="h1" variant="h5">
                        Add update
                    </Typography>
                    <Box
                        component="form"
                        noValidate sx={{ mt: 1 }}
                        onSubmit={(evt) => handleUpdateSubmit(evt, setSuccess, setError, user?.userId, params.waqfId)}
                    >
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="title"
                            label="Title"
                            name="title"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            multiline
                            fullWidth
                            name="body"
                            label="Message"
                            type="text"
                            id="body"
                        />
                        {success && <Box textAlign={'center'} sx={{ color: "green" }}>{success.toUpperCase()}</Box>}
                        {error && <Box textAlign={'center'} sx={{ color: "red" }}>{error.toUpperCase()}</Box>}
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            color='success'
                        >
                            Add
                        </Button>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </ThemeProvider>
    );
}