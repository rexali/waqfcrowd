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
// import Select, { SelectChangeEvent } from '@mui/material/Select';
import { FormControl, FormLabel, InputLabel, MenuItem, Select, } from '@mui/material';
import { useAuth } from '@/hooks/use-auth';
import { useGetWaqf } from '../../hooks/use-get-waqf';
import Image from 'next/image';
import { BASE_URL } from '@/constants/url';
import { handleUpdateWaqfSubmit } from '../../utils/handleUpdateWaqfSubmit';
import { convertToLocalDateString } from '@/utils/convertToLocalDate';

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function EditWaqf({ params }: { params: { waqfId: any } }) {

    const { user } = useAuth();
    const waqf = useGetWaqf(params.waqfId);
    const [success, setSuccess] = React.useState('');
    const [error, setError] = React.useState('');
    const [purpose, setPurpose] = React.useState(waqf.purpose);

    const handlePurposeChange = (event: any) => {
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
                        Edit waqf
                    </Typography>

                    <Box component="form" onSubmit={(evt) => handleUpdateWaqfSubmit(evt, user, setSuccess, setError)} noValidate={true} sx={{ mt: 1, }} >

                        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 1, md: 1 }} >

                            <Grid item xs={12} md={6}>
                                <FormLabel>Campaign Title</FormLabel>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="title"
                                    name="title"
                                    defaultValue={waqf.name}
                                    autoComplete="text"
                                    autoFocus
                                />
                                <TextField
                                    id="waqfId"
                                    name="waqfId"
                                    defaultValue={waqf.waqfId}
                                    hidden
                                />
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <FormLabel>Description</FormLabel>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="description"
                                    name="description"
                                    defaultValue={waqf.description}
                                    autoComplete="text"
                                    multiline
                                />
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <FormLabel>Target Amount</FormLabel>

                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="target"
                                    defaultValue={waqf.expectedAmount}
                                    name="expectedAmount"
                                    type='number'
                                />
                            </Grid>


                            <Grid item xs={12} md={6}>
                                <FormLabel>Organisation's name</FormLabel>

                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="organisation"
                                    defaultValue={waqf.organisation}
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
                                    defaultValue={convertToLocalDateString(waqf.endAt)}
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
                                    defaultValue={waqf.address}
                                    type="text"
                                    name="address"
                                />

                            </Grid>

                            <Grid item xs={12} md={6}>
                                <FormLabel>Local Govt.</FormLabel>
                                <TextField
                                    margin='normal'
                                    fullWidth
                                    required
                                    id="localGovt"
                                    defaultValue={waqf.localGovt}
                                    type="text"
                                    name="localGovt"
                                />
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <FormLabel>State</FormLabel>
                                <TextField
                                    margin='normal'
                                    fullWidth
                                    required
                                    id="state"
                                    defaultValue={waqf.state}
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
                                />
                            </Grid>

                            <Grid item xs={12} md={6}>
                            <FormLabel>Purpose</FormLabel>
                                <FormControl fullWidth sx={{mt:2}}>
                                    <InputLabel>Purpose</InputLabel>
                                    <Select
                                        id="purpose"
                                        value={purpose??''}
                                        name='purpose'
                                        label="Purpose"
                                        onChange={handlePurposeChange}
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
                                </FormControl>
                            </Grid>


                            <Grid item xs={12} md={6}>
                                <Image src={`${BASE_URL}/uploads/${waqf.logo}`} alt={"logo"} width={50} height={50} />
                                <FormLabel>Campaign or partner's logo</FormLabel>
                                <TextField
                                    margin='normal'
                                    fullWidth
                                    required
                                    id="logo"
                                    type="file"
                                    name="logo"
                                />
                                <TextField
                                    id="old_logo"
                                    name="old_logo"
                                    defaultValue={waqf.logo}
                                    type='text'
                                    hidden
                                />
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <Image src={`${BASE_URL}/uploads/${waqf.document}`} alt={"document"} width={50} height={50} />
                                <FormLabel>Certificate of Incorporation (C. A. C.)</FormLabel>
                                <TextField
                                    margin='normal'
                                    fullWidth
                                    required
                                    id="document"
                                    type="file"
                                    name="document"
                                />
                                <TextField
                                    id="old_document"
                                    name="old_document"
                                    defaultValue={waqf.document}
                                    type='text'
                                    hidden
                                />

                            </Grid>
                        </Grid>
                        {success && <Box textAlign={'center'} sx={{ color: "green" }}>{success.toUpperCase()}</Box>}
                        {error && <Box textAlign={'center'} sx={{ color: "red" }}>{error.toUpperCase()}</Box>}
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color='success'
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Update
                        </Button>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </ThemeProvider>
    );
}