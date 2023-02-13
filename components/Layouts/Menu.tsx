import * as React from "react";
import Box from "@mui/material/Box";
import useSWR from "swr";
import MTecher from "@/components/Layouts/Menu_state/MTecher";
import MStudent from "@/components/Layouts/Menu_state/MStudent";
  
export default function Menu() {
  const fetcher = (key: any) => fetch(key).then((res) => res.json());

  const { data, error } = useSWR("/api/user_id", fetcher);
  return (
    <Box  >
    {(data && data.user_id[1])=="techer"? <MTecher /> : <MStudent />}
    </Box>
  );
}
