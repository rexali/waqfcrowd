"use client"

import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { handleZakatCalcSubmit } from './utils/handleZakatCalcSubmit';
import Copyright from '@/components/common/copyright';
import { PaystackButton } from 'react-paystack';
import { useAuth } from '@/hooks/use-auth';
import styles from './styles/zakat.module.css';
import { isOnline } from './utils/isOnline';
import { getToken } from '@/utils/getToken';

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function ZakatCalculator() {

  const [total, setTotal] = React.useState(0);

  const getTotal = (value: any) => {
    setTotal(value);
  }

  const { user } = useAuth();
  const userId = getToken('userId');
  const email = getToken("email");

  const paystackProps: any = {
    amount: userId || total,
    email: email || user.email,
    metadata: {
      phone: '',
      name: ''
    },
    publicKey: 'pk_live_9522ac67d8f164271cafe16df7fc01b4613af4f7',
    text: 'Pay Now',
    onSuccess: () => { 
      console.log("Payment success");
    },
    onClose: () => { 
      console.warn("Payment failure");
      
    },
  }


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
            Calculate your zakat
          </Typography>

          <Box component="form" onSubmit={(evt) => handleZakatCalcSubmit(evt, getTotal)} noValidate sx={{ mt: 1 }}>

            <TextField
              margin="normal"
              required
              fullWidth
              id="total_asset"
              label="Total Asset"
              name="total_assets"
              autoComplete="number"
              type='number'
              autoFocus
            />

            <TextField
              margin="normal"
              required
              fullWidth
              id="total_liabilities"
              name="total_liabilities"
              label="Total Liabilities"
              type="number"
              autoComplete="number"
            />
            <Typography>Result (payable zakat): </Typography>
            <TextField
              margin="normal"
              required
              fullWidth
              name="net_asset"
              type='number'
              id="net_asset"
              defaultValue={total}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color='info'
              sx={{ mt: 3, mb: 2 }}
            >
              Calculate
            </Button>
          </Box>
          {isOnline() && <PaystackButton className={styles.paystackbutton} {...paystackProps} />}
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}