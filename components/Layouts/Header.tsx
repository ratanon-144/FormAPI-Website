import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import WidgetsIcon from '@mui/icons-material/Widgets';
import { ListItemIcon } from '@mui/material';

const drawerWidth = 240;

export default function Header() {
  return (
    
    <Box sx={{ display: 'flex' }}>
     
                 
          
      <CssBaseline />
        
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h5" noWrap component="div">

            {/* ไอคอน */}
            
          <WidgetsIcon />
          Quiz Bank
          
          </Typography>
          
        </Toolbar>
       
      </AppBar>
  
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
    
      </Box>
    </Box>
  );
}
