'use client'

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AWFLogo from '@/components/AWFLogo';
import Image from 'next/image';
import SearchItem from '@/app/search/search-item';
import { useMediaQuery } from 'react-responsive';
import Notifications from '@mui/icons-material/Notifications';
import Message from '@mui/icons-material/Message';
import { handleSignOut } from '@/app/auth/utils/handleSignOut';
import Link from 'next/link';
import { useAuth } from '@/hooks/use-auth';
import { BASE_URL } from '@/constants/url';
import { Avatar } from '@mui/material';


const pages = ['About', "Services", 'Contact', 'News', 'Resources', "Zakat", 'Waqf'];

const menus = ['Users', 'Messages', "Notifications", 'Settings', 'Logout'];

function NavBar() {

  const { user } = useAuth();

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const [anchorElCat, setAnchorElCat] = React.useState<null | HTMLElement>(null);

  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleOpenCategoryMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElCat(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleCloseCategoryMenu = () => {
    setAnchorElCat(null);
  };

  const isMobile = useMediaQuery({ maxDeviceWidth: 1023 });

  return <AppBar position={isMobile ? "fixed" : "static"} sx={{ backgroundColor: '#6232a8' }}>
    <Container maxWidth={"xl"}>
      <Toolbar disableGutters>
        {!isMobile && <AWFLogo />}
        <Link prefetch href={'/'} style={{ display: isMobile ? "none" : '', fontSize: 18, textDecoration: 'none', color: 'white', marginRight: 5, letterSpacing: '.1rem', fontWeight: 700, }} >
          Cwaqf
        </Link>
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: 'block', md: 'none' },
            }}
          >
            {pages.map((page, index) => (
              <MenuItem key={index + "me"} onClick={handleCloseNavMenu}>
                {<Link prefetch key={index + "li"} style={{ textDecoration: "none" }} href={`/${page.toLowerCase()}`}>{page}</Link>}
              </MenuItem>
            ))}
          </Menu>
        </Box>
        <Typography
          variant="h5"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            display: { xs: 'flex', md: 'none' },
            flexGrow: 1,
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.1rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          Cwaqf
        </Typography>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          {pages.map((page, index) => (<Link prefetch
            key={index + "p"}
            onClick={() => { handleCloseNavMenu }}
            href={`/${page === "Waqf" ? "waqfs" : page.toLowerCase()}`}
            style={{ margin: 4, color: 'white', display: 'block', textDecoration: "none", fontSize: 18 }}
          >
            {page}
          </Link>
          ))}
        </Box>
        {/* Messages component */}
        {!isMobile && <Link prefetch href={'/messages'} style={{ marginRight: 16 }} ><Message sx={{ color: "white" }} /></Link>}
        {/* Notification component */}
        {!isMobile && <Link prefetch href='/notifications' style={{ marginRight: 16 }} ><Notifications sx={{ color: "white" }} /></Link>}
        {/* serach component added */}
        {!isMobile && <SearchItem />}
        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Open menu">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              {user.photo ? <Image
                src={`${BASE_URL}/uploads/${user.photo}`}
                width={40}
                height={40}
                alt="Account"
                style={{ borderRadius: 20 }}
              /> :<Avatar />
              }
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            <MenuItem key={"signin"} onClick={handleCloseUserMenu}>
              <Link prefetch style={{ textDecoration: "none" }} href={`/auth/signin`}>Sign In</Link>
            </MenuItem>

            <MenuItem key={"signup"} onClick={handleCloseUserMenu}>
              <Link style={{ textDecoration: "none" }} href={`/auth/signup`}>Sign Up</Link>
            </MenuItem>

            {menus.map((menu, index) => (
              <MenuItem key={menu} onClick={handleCloseUserMenu}>
                {(menu === "Logout") ? <Link prefetch onClick={handleSignOut} style={{ textDecoration: "none" }} key={index + "s"} href={'#'} >{menu}</Link> : menu === "Users" ? <Link prefetch style={{ textDecoration: "none" }} key={index + "s"} href={`/${menu.toLowerCase()}`}>{"Account"}</Link> : <Link prefetch style={{ textDecoration: "none" }} key={index + "s"} href={`/${menu.toLowerCase()}`}>{menu}</Link>}
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </Container>
  </AppBar>
}
export default NavBar;