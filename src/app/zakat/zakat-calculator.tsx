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
import { calculateZakat } from './utils/calculateZakat';

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function ZakatCalculator({setPayableZakat}:{setPayableZakat:any}) {

  const [total, setTotal] = React.useState<any>();
  const [formData, setFormData] = React.useState({
    total_assets: 0,
    total_liabilities: 0
  });



  const handleChange = (evt: any) => {
    const { name, value } = evt.target
    setFormData({
      ...formData,
      [name]: Number(value)
    })
   setTotal('');
  }
  const getTotal = (value: any) => {
    setTotal(value);
    setPayableZakat(value);
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

          <Box component="form"  noValidate sx={{ mt: 1 }}>

            <TextField
              margin="normal"
              required
              fullWidth
              id="total_asset"
              label="Total Asset"
              name="total_assets"
              autoComplete="number"
              onChange={handleChange}
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
              onChange={handleChange}
              type="number"
              autoComplete="number"
            />
            <Typography>Result (payable zakat): </Typography>
            <TextField
              margin="normal"
              required
              fullWidth
              disabled
              name="net_asset"
              // type='number'
              id="net_asset"
              value={total}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color='info'
              sx={{ mt: 3, mb: 2 }}
              onClick={(evt) => {
                evt.preventDefault();
                getTotal(calculateZakat(formData.total_assets, formData.total_liabilities))
                // setPayableZakat(calculateZakat(formData.total_assets, formData.total_liabilities))
              }}
            >
              Calculate
            </Button>
          </Box>
          {isOnline() && <PaystackButton className={styles.paystackbutton} {...paystackProps} />}
        </Box>
      </Container>
    </ThemeProvider>
  );
}