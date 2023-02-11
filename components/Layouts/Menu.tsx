import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";


import Link from "next/link";
import {
  BarChart,
  MenuBook,
  Group,
  PersonAdd,
  LibraryAddCheck,
  Quiz,
  TableChart,
} from "@mui/icons-material";


const drawerWidth = 240;

export default function Menu() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            {/* รายวิชา*/}
            <Link href="/รายวิชา" passHref>
              <ListItemButton
                // className={router.pathname === "/รายวิชา" ? "Mui-selected" : ""}
              >
                <ListItemIcon>
                  <MenuBook />
                </ListItemIcon>
                <ListItemText primary="รายวิชา" />
              </ListItemButton>
            </Link>

            {/* การทดสอบ */}
            <Link href="/การทดสอบ" passHref>
              <ListItemButton
                // className={
                //   router.pathname === "/การทดสอบ" ? "Mui-selected" : ""
                // }
              >
                <ListItemIcon>
                  <LibraryAddCheck />
                </ListItemIcon>
                <ListItemText primary="การทดสอบ" />
              </ListItemButton>
            </Link>

            {/* รายชื่อ */}
            <Link href="/รายชื่อ" passHref>
              <ListItemButton
                // className={router.pathname === "/รายชื่อ" ? "Mui-selected" : ""}
              >
                <ListItemIcon>
                  <Group />
                </ListItemIcon>
                <ListItemText primary="รายชื่อ" />
              </ListItemButton>
            </Link>

            {/* เพิ่มผู้สอน */}
            <Link href="/เพิ่มผู้สอน" passHref>
              <ListItemButton
                // className={router.pathname === "/เพิ่มผู้สอน" ? "Mui-selected" : ""}
              >
                <ListItemIcon>
                  <PersonAdd />
                </ListItemIcon>
                <ListItemText primary="เพิ่มผู้สอน" />
              </ListItemButton>
            </Link>

 {/* คลังข้อสอบ */}
 <Link href="/คลังข้อสอบ" passHref>
              <ListItemButton
                // className={router.pathname === "/คลังข้อสอบ" ? "Mui-selected" : ""}
              >
                <ListItemIcon>
                  <Quiz />
                </ListItemIcon>
                <ListItemText primary="คลังข้อสอบ" />
              </ListItemButton>
            </Link>

 {/* คะแนน */}
 <Link href="/คะแนน" passHref>
              <ListItemButton
                // className={router.pathname === "/คะแนน" ? "Mui-selected" : ""}
              >
                <ListItemIcon>
                  <TableChart />
                </ListItemIcon>
                <ListItemText primary="คะแนน" />
              </ListItemButton>
            </Link>

 {/* วิเคราะห์ข้อมูล */}
 <Link href="/วิเคราะห์ข้อมูล" passHref>
              <ListItemButton
                // className={router.pathname === "/วิเคราะห์ข้อมูล" ? "Mui-selected" : ""}
              >
                <ListItemIcon>
                  <BarChart />
                </ListItemIcon>
                <ListItemText primary="วิเคราะห์ข้อมูล" />
              </ListItemButton>
            </Link>










            
          </List>
          {/* <Divider /> */}
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}
