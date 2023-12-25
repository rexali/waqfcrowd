"use client"

import * as React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import UserProfile from '../users/user-profile';
import Button from '@mui/material/Button';
import ZakatTabs from '../zakat/zakat-tabs';
import Messages from '../messages/page';
import UserWaqf from './user-waqf';
import Container from '@mui/material/Container';
import UserWish from '../users/user-wish';
import { useMediaQuery } from 'react-responsive';

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {

  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component={"div"}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function UserDashboard() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const isMobile = useMediaQuery({ maxDeviceWidth: 1023 });


  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  return (
    <Box sx={{ bgcolor: 'background.paper', marginTop: isMobile ? 6 : "" }}>
      <CssBaseline />

      <AppBar position="static" sx={{ bgcolor: "white", color: 'black' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Profile" {...a11yProps(0)} sx={{fontSize:10}} />
          <Tab label="Waqf" {...a11yProps(1)} sx={{fontSize:10}} />
          <Tab label="Messages" {...a11yProps(2)} sx={{fontSize:10}} />
          <Tab label="Favourite" {...a11yProps(3)} sx={{fontSize:10}} />
          <Tab label="Zakat" {...a11yProps(4)} sx={{fontSize:10}} />
        </Tabs>
      </AppBar>

      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction} >
          <Box component={'div'} textAlign={'left'} >
            <Typography
              color='success'
            >
              YOUR PROFILE
            </Typography>
          </Box>
          <UserProfile />
        </TabPanel>

        <TabPanel value={value} index={1} dir={theme.direction}>
          <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <Box component={'div'} textAlign={'left'} >
              <Typography
                color='success'
              >
                YOUR AWQAF
              </Typography>
            </Box>
            <Box component={'div'} textAlign={'right'} >
              <Button
                id='create'
                type='button'
                variant='contained'
                color='success'
                onClick={() => window.location.assign("/waqf/create-waqf")}
              >
                Create a waqf
              </Button>
            </Box>
          </Box>
          <Container maxWidth={"md"}>
            <Box>
              <UserWaqf />
            </Box>
          </Container>
        </TabPanel>

        <TabPanel value={value} index={2} dir={theme.direction}>
          <Box component={'div'} textAlign={'left'} >
            <Typography
              color='success'
            >
              YOUR MESSAGE(S)
            </Typography>
          </Box>
          <Messages />
        </TabPanel>

        <TabPanel value={value} index={3} dir={theme.direction}>
          <Box component={'div'} textAlign={'left'} >
            <Typography
              color='success'
            >
              YOUR SAVED AWQAF
            </Typography>
          </Box>
          <UserWish />
        </TabPanel>

        <TabPanel value={value} index={4} dir={theme.direction}>
          <ZakatTabs />
        </TabPanel>

      </SwipeableViews>
    </Box>
  );
}
