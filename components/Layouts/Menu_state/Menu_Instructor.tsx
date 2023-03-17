import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import useSWR from "swr";
import { BarChart, MenuBook, Group, PersonAdd, LibraryAddCheck, Quiz, TableChart } from "@mui/icons-material";
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
        <ListItem   component="a" href="/instructor" >
          <ListItemIcon>
            <MenuBook />
          </ListItemIcon>
          <ListItemText primary="รายวิชา" />
        </ListItem>
        <Divider />
        <ListItem   component="a" href="/instructor/testStatus">
          <ListItemIcon>
            <LibraryAddCheck />
          </ListItemIcon>
          <ListItemText primary="การทดสอบ" />
        </ListItem>
        <Divider />
        <ListItem  component="a" href="/instructor/studentList" >
          <ListItemIcon>
            <Group />
          </ListItemIcon>
          <ListItemText primary="รายชื่อ" />
        </ListItem>
        <Divider />
        <ListItem  component="a" href="/instructor/addInstructor" >
          <ListItemIcon>
            <PersonAdd />
          </ListItemIcon>
          <ListItemText primary="เพิ่มผู้สอน" />
        </ListItem>
        <Divider />
        <ListItem   component="a" href="/instructor/examLibrary">
          <ListItemIcon>
            <Quiz />
          </ListItemIcon>
          <ListItemText primary="คลังข้อสอบ" />
        </ListItem>
        <Divider />
        <ListItem  component="a" href="/instructor/score" >
          <ListItemIcon>
            <TableChart />
          </ListItemIcon>
          <ListItemText primary="คะแนน" />
        </ListItem>
        <Divider />
        <ListItem  component="a" href="/instructor/analyze">
          <ListItemIcon>
            <BarChart />
          </ListItemIcon>
          <ListItemText primary="วิเคราะห์ข้อมูล" />
        </ListItem>
        <Divider />
      </Box>
    </Drawer>

  );
}
