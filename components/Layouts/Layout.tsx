import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "@/components/Layouts/Header";
import Menu from "@/components/Layouts/Menu";
import MTecher from "@/components/Layouts/Menu_state/MTecher";
import MStudent from "@/components/Layouts/Menu_state/MStudent";
import useSWR from "swr";
import { Toolbar } from "@mui/material";
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
      {(data && data.user_id[1]) == "techer" ? <MTecher /> : <MStudent />}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}