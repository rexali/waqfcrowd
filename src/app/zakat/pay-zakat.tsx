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
import { handlePayZakatSubmit } from './utils/handlePayZakatsubmit';


// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function PayZakat() {

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
            Pay your zakat
          </Typography>
          <Box component="form" onSubmit={handlePayZakatSubmit} noValidate sx={{ mt: 1 }}>
            
            <TextField
              margin="normal"
              required
              fullWidth
              id="payable_zakat"
              label="Zakat Amount"
              name="amount"
              autoComplete="number"
              type='number'
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              type='text'
            />

            <TextField
              margin="normal"
              required
              fullWidth
              id="beneficiaries"
              name="message"
              label="Message"
              type="text"
              autoComplete="text"
              multiline
              placeholder='leave a message for us'
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color='info'
              sx={{ mt: 3, mb: 2 }}
            >
              Pay now
            </Button>

          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}