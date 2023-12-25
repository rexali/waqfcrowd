"use client"

import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Copyright from '@/components/common/copyright';
import Image from 'next/image';
import CameraIcon from '@mui/icons-material/CameraAlt';
import { updateUserProfileSubmit } from './utils/updateUserProfileSubmit';
import { addUserProfilePhoto } from './utils/addUserProfilePhoto';
import { AuthContext } from '@/context/AuthContext';
import { Avatar } from '@mui/material';
import { useProfile } from './hooks/use-profile';
import StatusModal from '@/components/common/status-modal';
import { BASE_URL } from '@/constants/url';

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function UserProfile() {
  const { state } = React.useContext(AuthContext);
  const profile = useProfile(state.user?.userId)[0];

  type File = {
    filenames: string,
    files: any,
  }

  const [success, setSuccess] = React.useState(false);
  const [data, setData] = React.useState<File>({
    files: [],
    filenames: ""
  });
  const [photo, setPhoto] = React.useState(state.user.photo);
  const [url, setURL]=React.useState('');

  async function getFilesCallback(evt: any) {

    setURL(URL.createObjectURL(evt.target.files[0]));
    setData({
      ...data,
      files: [{ [evt.target.name]: await evt.target.files[0]}],
      filenames: evt.target.name,
    });
  };

  return (
    <ThemeProvider theme={defaultTheme} >
      <Container component="main" maxWidth="lg">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box component={"div"}>
            {url ? <Avatar src={url} sx={{ width: 100, height: 100 }} /> : <Image
              src={`${BASE_URL}/uploads/${photo}`}
              alt={'profile photo'}
              width={100}
              height={100}
              id='vimg'
              style={{
                borderRadius: 50,
              }}
            /> 
            }

            {/* {<div id='img'>{!(data.files.length > 0) && <Avatar />}</div>} */}
            <Button size="small" color='success' onClick={() => addUserProfilePhoto(getFilesCallback)} startIcon={<CameraIcon />}>Change</Button>
          </Box>

          <Box component="form" onSubmit={(evt) => updateUserProfileSubmit(evt, state.user.userId, data.files[0], setSuccess)} noValidate sx={{ mt: 1, }} >

            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1 }} >

              <Grid item xs={12} md={6}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="firstname"
                  label="Full Name"
                  name="fullName"
                  value={profile?.firstName + " " + profile?.lastName}
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  name="email"
                  value={state.user?.email}
                />
              </Grid>
            </Grid>
            <Box textAlign={'center'}>
              <Button type='submit' variant='contained' color='success' >Submit</Button>
            </Box>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
        {success && <StatusModal message={{ title: "Update", body: "Success" }} closeCallback={setSuccess} />}
      </Container>
    </ThemeProvider>
  );
}