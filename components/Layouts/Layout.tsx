import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "@/components/Layouts/Header";
import useSWR from "swr";
import { Toolbar } from "@mui/material";
import Menu_Instructor from "./Menu_state/Menu_Instructor";
import Menu_Student from "./Menu_state/Menu_Student";

interface LayoutProps {
  children: React.ReactNode;
}
export default function Layout({ children }: LayoutProps) {
  const fetcher = (key: any) => fetch(key).then((res) => res.json());
  const { data, error } = useSWR("/api/user_id", fetcher);
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Header />
      {(data && data.user_id[1]) == "instructor" ? <Menu_Instructor /> : <Menu_Student />}
      <Box component="main" sx={{ flexGrow: 1, p: 3 , backgroundColor:'#F2F2F2' }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}