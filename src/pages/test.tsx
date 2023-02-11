import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Layout from "@/components/Layouts/Layout";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

// table
const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 90,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];
export default function FullWidthTextField() {
  return (
    <Layout>
      <Box mt={2} sx={{ justifyContent: "center" }}>
        <Grid container spacing={2}>
          <Grid item>
            {/* margin-top = mt  , sx={{ bgcolor: "#0FFF" }} คือกำหนด bgcolor ให */}
            <Box mt={2}>
              <Typography>ชื่อการทดสอบ</Typography>
            </Box>
          </Grid>
          <Grid item>
            <TextField
              id="outlined-basic"
              // label="name"
              defaultValue="Application Layer"
              sx={{
                width: 300,
                maxWidth: "100%",
              }}
            />
          </Grid>
          <Grid item>
            <Box mt={2}>
              <Typography>ครั้งที่</Typography>
            </Box>
          </Grid>
          <Grid item>
            <TextField
              id="outlined-basic"
              // label="name"
              defaultValue="1"
              sx={{
                width: 90,
                maxWidth: "100%",
              }}
            />
          </Grid>
        </Grid>
      </Box>


      {/* ตั้งค่าการทดสอบ */}
      <Box>
        <Typography mt={4}>ตั้งเวลาการทดสอบ</Typography>

        {/* table */}
        <Box mt={2}>
          <div style={{ height: 400, width: "100%" }}>
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
              checkboxSelection
            />
          </div>
        </Box>


      </Box>
    </Layout>
  );
}
