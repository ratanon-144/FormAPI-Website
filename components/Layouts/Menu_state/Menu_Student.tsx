import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import useSWR from "swr";
import { BarChart,  MenuBook,  TableChart } from "@mui/icons-material";
import { Divider, ListItem } from "@mui/material";


const drawerWidth = 240;

export default function Menu() {
  const fetcher = (key: any) => fetch(key).then((res) => res.json());

  const { data, error } = useSWR("/api/user_id", fetcher)
  return (
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
        <ListItem  component="a"  href="/" >
          <ListItemIcon>
            <TableChart />
          </ListItemIcon>
          <ListItemText primary="กำหนดการ" />
        </ListItem>
        <Divider />
        <ListItem  component="a"  href="/">
          <ListItemIcon>
            <BarChart />
          </ListItemIcon>
          <ListItemText primary="คะแนน" />
        </ListItem>
        <Divider />
      </Box>
    </Drawer>

  );
}
