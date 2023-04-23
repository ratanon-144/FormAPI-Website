import * as React from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { blue } from "@mui/material/colors";
import { ListItem, Stack } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { Layers, BarChart, Person , MenuBook, Group, PersonAdd, LibraryAddCheck, Quiz, TableChart } from "@mui/icons-material";
import { useRouter } from "next/router";
import { useAppDispatch } from "@/store/store";
import { getSession, userFullname ,userID} from "@/store/slices/userSlice";
import { useSelector } from "react-redux";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

type MenuProp = {
  open: boolean;
  onDrawerClose: () => void;
};

export default function Menu({ open, onDrawerClose }: MenuProp) {
  const theme = useTheme();
  const router = useRouter();
  const dispatch = useAppDispatch();
 
  const checkLevel = useSelector(userID); 
  React.useEffect(() => {
    dispatch(getSession());
  }, [dispatch]);

  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader/>
      <Divider />
      <List>
        {/* รายวิชา */}
        <Link href="/instructor" passHref>
          <ListItem
            button
            className={router.pathname === "/instructor" ? "Mui-selected" : ""}
          >
            <ListItemIcon>
              <MenuBook />
            </ListItemIcon>
            <ListItemText primary="รายวิชา" />
          </ListItem>
        </Link>

        {/* การทดสอบ */}
        <Link href="/instructor/testStatus" passHref>
          <ListItem
            button
            className={router.pathname === "/instructor/testStatus" ? "Mui-selected" : ""}
          >
            <ListItemIcon>
            <LibraryAddCheck />
            </ListItemIcon>
            <ListItemText primary="การทดสอบ" />
          </ListItem>
        </Link>

           {/* รายชื่อ */}
           <Link href="/instructor/studentList" passHref>
          <ListItem
            button
            className={router.pathname === "/instructor/studentList" ? "Mui-selected" : ""}
          >
            <ListItemIcon>
            <Group />
            </ListItemIcon>
            <ListItemText primary="รายชื่อ" />
          </ListItem>
        </Link>

        {/* เพิ่มผู้สอน */}
        <Link href="/instructor/addInstructor" passHref>
          <ListItem
            button
            className={router.pathname === "/instructor/addInstructor" ? "Mui-selected" : ""}
          >
            <ListItemIcon>
            <PersonAdd />
            </ListItemIcon>
            <ListItemText primary="เพิ่มผู้สอน" />
          </ListItem>
        </Link>

        
        {/* คลังข้อสอบ */}
        <Link href="/instructor/examLibrary" passHref>
          <ListItem
            button
            className={router.pathname === "/instructor/examLibrary" ? "Mui-selected" : ""}
          >
            <ListItemIcon>
            <Quiz />
            </ListItemIcon>
            <ListItemText primary="คลังข้อสอบ" />
          </ListItem>
        </Link>

          {/* คะแนน */}
          <Link href="/instructor/score" passHref>
          <ListItem
            button
            className={router.pathname === "/instructor/score" ? "Mui-selected" : ""}
          >
            <ListItemIcon>
            <TableChart />
            </ListItemIcon>
            <ListItemText primary="คะแนน" />
          </ListItem>
        </Link>

        
        {/* วิเคราะห์ข้อมูล */}
        <Link href="/instructor/analyze" passHref>
          <ListItem
            button
            className={router.pathname === "/instructor/analyze" ? "Mui-selected" : ""}
          >
            <ListItemIcon>
            <BarChart />
            </ListItemIcon>
            <ListItemText primary="วิเคราะห์ข้อมูล" />
          </ListItem>
        </Link> 
      </List>

      <Divider /> 
    </Drawer>
  );
}
