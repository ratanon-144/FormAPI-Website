import * as React from "react";
import { styled, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "@/components/Layouts/Header";
import Menu from "@/components/Layouts/Menu";

const drawerWidth = 240;

const DrawerHeader = styled("div")(({ theme }) => ({
  // display: "flex",
  // alignItems: "center",
  // justifyContent: "flex-end",
  // padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Header  />
      <Menu  />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Box padding={9}>
        {children}
      </Box>
      </Box>
    </Box>
  );
}