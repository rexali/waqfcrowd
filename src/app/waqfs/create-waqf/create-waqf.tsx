"use client"

import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Copyright from '@/components/common/copyright';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import {FormLabel,} from '@mui/material';
import { useAuth } from '@/hooks/use-auth';
import { handleCreateWaqfSubmit } from '../utils/handleCreateWaqfSubmit';

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function CreateWaqf() {

  const { user } = useAuth();
  const [success, setSuccess] = React.useState('');
  const [error, setError] = React.useState('');

  const [purpose, setPurpose] = React.useState('');

  const handlePurposeChange = (event: SelectChangeEvent) => {
    setPurpose(event.target.value);
  };

  return (
    <ThemeProvider theme={defaultTheme} >
      <Container component="main" maxWidth="lg">
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
            Create a waqf
          </Typography>

          <Box component="form" onSubmit={(evt)=>handleCreateWaqfSubmit(evt,user,setSuccess,setError)} noValidate={true} sx={{ mt: 1, }} >

            <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 1, md: 1 }} >

              <Grid item xs={12} md={6}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="title"
                  label="Campaign Title"
                  name="title"
                  autoComplete="text"
                  autoFocus
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="description"
                  label="Description"
                  name="description"
                  autoComplete="text"
                  multiline
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="target"
                  label="Target Amount"
                  name="expectedAmount"
                  placeholder='Target amount'
                  type='number'
                />
              </Grid>


              <Grid item xs={12} md={6}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="organisation"
                  label="Organisation Name"
                  name="organisation"
                  type='text'
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <FormLabel>End Date</FormLabel>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="endAt"
                  name="endAt"
                  type='date'
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <FormLabel>Street Address</FormLabel>
                <TextField
                  margin='normal'
                  fullWidth
                  required
                  id="address"
                  label="Street Address"
                  type="text"
                  name="address"
                />

              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  margin='normal'
                  fullWidth
                  required
                  id="localGovt"
                  label="Local Govt."
                  type="text"
                  name="localGovt"
                />

              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  margin='normal'
                  fullWidth
                  required
                  id="state"
                  label="State"
                  type="text"
                  name="state"
                />

              </Grid>

              <Grid item xs={12} md={6}>
                <FormLabel>Country</FormLabel>
                <TextField
                  margin='normal'
                  fullWidth
                  required
                  id="country"
                  label="Country"
                  type="text"
                  name="country"
                  defaultValue={"Nigeria"}
                // disabled
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <FormLabel>Select a Cause</FormLabel>
                <Select
                  id="purpose"
                  value={purpose}
                  fullWidth
                  name='purpose'
                  onChange={handlePurposeChange}
                  size="medium"
                  sx={{ mt: 1.75 }}
                >
                  <MenuItem value=""><em>None</em></MenuItem>
                  <MenuItem value={"Relief"}>Relief</MenuItem>
                  <MenuItem value={"Emergency"}>Emergency</MenuItem>
                  <MenuItem value={"hospital"}>Hospital</MenuItem>
                  <MenuItem value={"School"}>School</MenuItem>
                  <MenuItem value={"Almajiri"}>Almajiri</MenuItem>
                  <MenuItem value={"Research & Development"}>Research & Development</MenuItem>
                  <MenuItem value={"Widow"}>Widow</MenuItem>
                  <MenuItem value={"Orphan"}>Orphan</MenuItem>
                  <MenuItem value={"Homelessness"}>Homelessness</MenuItem>
                  <MenuItem value={"Other"}>Other</MenuItem>
                </Select>
              </Grid>


              <Grid item xs={12} md={6}>
                <FormLabel>Campaign or partners logo</FormLabel>
                <TextField
                  margin='normal'
                  fullWidth
                  required
                  id="logo"
                  type="file"
                  name="logo"
                />

              </Grid>

              <Grid item xs={12} md={6}>

                <FormLabel>Certificate of Incorporation (C. A. C.)</FormLabel>
                <TextField
                  margin='normal'
                  fullWidth
                  required
                  id="document"
                  type="file"
                  name="document"
                />

              </Grid>
            </Grid>
            {success && <Box textAlign={'center'} sx={{ color: "green" }}>{success.toUpperCase()}</Box>}
            {error && <Box textAlign={'center'} sx={{ color: "red" }}>{error.toUpperCase()}</Box>}        
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color='info'
              sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}