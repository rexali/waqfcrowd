'use client'

import * as React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import UpdateList from './update-list';
import { useUpdate } from '@/hooks/use-update';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import { handleUpdateSubmit } from './utils/addUpdate';
import WaqfCard from '../../waqf-card';
import DonateModal from '@/components/common/donate-modal';
import DonateForm from '../../components/donate-form';
import { useAuth } from '@/hooks/use-auth';
import { useGetWaqf } from '../../hooks/use-get-waqf';

export default function Updates({ params }: { params: { waqfId: string } }) {

    const [success, setSuccess] = React.useState('');

    const [error, setError] = React.useState('');

    const {user} = useAuth();

    const updates = useUpdate(params.waqfId);

    const waqf = useGetWaqf(params.waqfId);

    const [open, setOpen] = React.useState(false);

    const openCallback = (val: boolean) => {
        setOpen(val);
    };

    const renderUpdateBox = () => {
        return (
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
        )
    }
    if (!updates.length) {

        return (
            <Container style={{minHeight:"360px",  alignContent:'center'}} sx={{ mt: 8 }} component={"main"} maxWidth="md">
                <Box textAlign={'center'}>No updates found</Box>
                {/* update box start */}
                {user?.userId === parseInt(waqf.userId as string) && renderUpdateBox()}
            </Container>
        )
    }

    return (
        <Container sx={{ mt: 8 }} component={"main"} maxWidth="md">
            <Box sx={{ mb: 4 }}>Waqf</Box>
            <WaqfCard
                waqf={waqf}
                openCallback={openCallback}
            />
            <Box sx={{mt:4 }}>Update(s)</Box>
            <Grid container columnSpacing={1}>
                {<UpdateList updates={updates} />}
            </Grid>
            {open && <DonateModal openCallback={openCallback}><DonateForm waqfId={params.waqfId} /></DonateModal>}
            {/* update box start */}
            {user?.userId === parseInt(waqf.userId as string) && renderUpdateBox()}
        </Container>
    );
}