import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import WidgetsIcon from "@mui/icons-material/Widgets";  
import { colors } from '@mui/material';
import ViewInArIcon from '@mui/icons-material/ViewInAr';


const settings = ['โปรไฟล์','ออกจากระบบ'];
 
export default function Header() {

  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };
 
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
  return (
     
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar >


        {/* icon */}
      <WidgetsIcon  sx={{ mr: 1}}  />

      
      {/* color="#424242"  */}
        <Typography variant="h6" noWrap component="a"  href="/"   >    
        Quiz Bank
        </Typography>
        <Box sx={{ flexGrow: 1, bgcolor: "#fff" }} />
        <Box sx={{ display: { xs: "flex", md: "flex" } }}>
          <Typography   variant="h6" align="center" sx={{ p: 2, display: { md: "flex" ,xs: "none"} }}>
          ผศ.ธนา หงษ์สุวรรณ
          </Typography>
          <Tooltip title="Open settings" sx={{ bgcolor: "yellow" }}>
            <IconButton onClick={handleOpenUserMenu}  sx={{ p: 0 }}>
              <Avatar alt="Remy Sharp"  />
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
            </MenuItem >
          ))}
        </Menu >
        </Box>
      </Toolbar>
    </AppBar>
  
  );
}
