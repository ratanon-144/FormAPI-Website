import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import WidgetsIcon from "@mui/icons-material/Widgets";
const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer +1}}>
          <Toolbar variant="dense">
          <WidgetsIcon sx={{ mr: 1 }}  />
            <Typography variant="h6" noWrap component="a"  href="/"   >    
            Quiz Bank
            </Typography>
            <Box sx={{ flexGrow: 1, bgcolor: "#EDFA58" }} />
            <Box sx={{ display: { xs: "flex", md: "flex" } }}>
              <Typography variant="h6" align="center" sx={{ p: 2, display: { md: "flex" ,xs: "none"} }}>
              ผศ.ธนา หงษ์สุวรรณ
              </Typography>
              <Tooltip title="Open settings" sx={{ bgcolor: "yellow" }}>
                <IconButton onClick={handleOpenUserMenu}  sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="https://i.pravatar.cc/300" />
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
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    );
}
export default ResponsiveAppBar;