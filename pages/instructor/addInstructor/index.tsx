import Layout from "@/components/Layouts/Layout";
import * as React from "react";
import axios from "axios";
import UserSWR from "swr";
import { Box, Button, Card, Stack, TextField, Typography } from "@mui/material";
import { DataGrid,  GridActionsCellItem,  GridCellCheckboxRenderer,  GridColDef,  GridColumns,   GridRenderCellParams,  GridToolbar,  GridValueGetterParams} from "@mui/x-data-grid";
type Props = {};
// 63015031 เจษฎา วงศ์คำดี
const rows1 = [   
    { id:0 ,tite:"ผศ.", fullName:"ผศ.ธนา หงษ์สุวรรณ",email:"khthana@kmitl.ac.th"},
    { id:1 , fullName:"ผศ.ดร.ชมพูนุท จินจาคาม",email:"chompoonuch.ji@kmitl.ac.th"},
   
];
export default function StudentList({}: Props) {
    const url = "http://localhost:8080/api/accounts";
    const columns1: GridColDef[] = [   
        { field: "fullName", headerName: "ชื่อ-นามสกุล", width: 350 },
        { field: "email", headerName: "อีเมล", width: 250 }
    ];
    return (
        <Layout>
            <Stack spacing={2}>  
            <Typography Text-align='' variant='h5'>รายชื่อคณะอาจาร</Typography>
                <Card  sx={{margin: "10", padding: "30px 25px",textTransform: "capitalize"}}>
                    <Stack  spacing={2}>
                        <Stack  direction="row" justifyContent="flex-end" alignItems="flex-start" spacing={4}>
                        <TextField id="standard-basic" label="อีเมล" variant="standard" />
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
