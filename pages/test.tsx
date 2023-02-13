import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import MenuItem from '@mui/material/MenuItem';
import WidgetsIcon from "@mui/icons-material/Widgets";  
import useSWR from "swr";
import { BarChart, MenuBook, Group, PersonAdd, LibraryAddCheck, Quiz, TableChart } from "@mui/icons-material";
 

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
import { IconButton, Tooltip } from '@mui/material';

const drawerWidth = 240;

export default function ClippedDrawer() {
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };
 
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
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
      <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: 'auto' }}>
        <ListItem   component="a"  href="/" >
          <ListItemIcon>
            <MenuBook />
          </ListItemIcon>
          <ListItemText primary="รายวิชา" />
        </ListItem>
        <Divider />
        <ListItem   component="a"  href="/">
          <ListItemIcon>
            <LibraryAddCheck />
          </ListItemIcon>
          <ListItemText primary="การทดสอบ" />
        </ListItem>
        <Divider />
        <ListItem  component="a"  href="/" >
          <ListItemIcon>
            <Group />
          </ListItemIcon>
          <ListItemText primary="รายชื่อ" />
        </ListItem>
        <Divider />
        <ListItem  component="a"  href="/" >
          <ListItemIcon>
            <PersonAdd />
          </ListItemIcon>
          <ListItemText primary="เพิ่มผู้สอน" />
        </ListItem>
        <Divider />
        <ListItem   component="a"  href="/">
          <ListItemIcon>
            <Quiz />
          </ListItemIcon>
          <ListItemText primary="คลังข้อสอบ" />
        </ListItem>
        <Divider />
        <ListItem  component="a"  href="/" >
          <ListItemIcon>
            <TableChart />
          </ListItemIcon>
          <ListItemText primary="คะแนน" />
        </ListItem>
        <Divider />
        <ListItem  component="a"  href="/">
          <ListItemIcon>
            <BarChart />
          </ListItemIcon>
          <ListItemText primary="วิเคราะห์ข้อมูล" />
        </ListItem>
        <Divider />
      </Box>
    </Drawer>
    
        <Toolbar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
          enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
          imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
          Convallis convallis tellus id interdum velit laoreet id donec ultrices.
          Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
          nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
          leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
          feugiat vivamus at augue. At augue eget arcu dictum varius duis at
          consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
          sapien faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
          eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
          neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
          tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
          sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
          tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
          gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
          et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
          tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
      </Box>
    </Box>
  );
}