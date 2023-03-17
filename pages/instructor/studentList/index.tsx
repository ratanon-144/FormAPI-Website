import Layout from "@/components/Layouts/Layout";
import * as React from "react";
import axios from "axios";
import UserSWR from "swr";
import { Box, Button, Card, Stack, TextField, Typography } from "@mui/material";
import {
    DataGrid,
    GridActionsCellItem,
    GridCellCheckboxRenderer,
    GridColDef,
    GridColumns,
    GridRenderCellParams,
    GridToolbar,
    GridValueGetterParams,
} from "@mui/x-data-grid";
type Props = {};
// 63015031 เจษฎา วงศ์คำดี
const rows1 = [
    { id:0 ,student_id: 63015024, fullName:"จิรพัฒน์ ชโลธร",email:"63015024@kmitl.ac.th"},
    { id:1 , student_id: 63015025, fullName:"จิรศิลป์ เอก",email:"63015025@kmitl.ac.th"},
    { id:2 ,student_id: 63015031, fullName:"เจษฎา วงศ์คำดี",email:"63015031@kmitl.ac.th"}
];
export default function StudentList({}: Props) {
    const url = "http://localhost:8080/api/accounts";

    const columns1: GridColDef[] = [ 
        { field: "student_id", headerName: "รหัสนักศึกษา", width: 250 },
        { field: "fullName", headerName: "ชื่อ-นามสกุล", width: 350 },
        { field: "email", headerName: "Emali", width: 250 },
    ];
    return (
        <Layout>
            <Stack spacing={2}>  
            <Typography Text-align='' variant='h5'>รายชื่อนักศึกษา</Typography>
                <Card  sx={{      margin: "10",      padding: "30px 25px",       textTransform: "capitalize",  }}>
                    <Stack  spacing={2}>
                        <Stack  direction="row" justifyContent="flex-end" alignItems="flex-start" spacing={4}>
                        <TextField id="standard-basic" label="รหัสนักศึกษา" variant="standard" />
                        <TextField id="standard-basic" label="ชื่อ-นามสกุล" variant="standard" />
                            <Button size='large'variant='contained'>เพิ่ม</Button>
                            <Button size='large'variant='contained'>อัปโหลด</Button>
                        </Stack>
                        <Box   sx={{ height: 400, width: "100%","& .super-app-theme--header": { color: "#FFFF"}}}>
                              <DataGrid   checkboxSelection rows={rows1}  columns={columns1}    pageSize={5}    rowsPerPageOptions={[5]}    getRowHeight={() => "auto"}  />
                        </Box>
                    </Stack>
                </Card>
            </Stack>
        </Layout>
    );
}
