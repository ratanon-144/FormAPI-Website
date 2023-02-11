import Layout from "@/components/Layouts/Layout";
import { userSelector } from "@/store/slices/userSlice";
import React from "react";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { Add, Computer, Quiz } from "@mui/icons-material";
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';



const columns: GridColDef[] = [
  { field: 'id', headerName: 'รหัสนักศึกษา', width: 70 },
  { field: 'firstName', headerName: 'ชื่อ', width: 130 },
  { field: 'lastName', headerName: 'นามสกุล', width: 130 },
  // {
  // field: 'age',
  // headerName: 'Age',
  // type: 'number',
  //    width: 90,
  //  },
  {
    field: 'fullName',
    headerName: 'ชื่อ-นามสกุล',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

const rows = [
  { id: 63015007, lastName: 'สุยานะ', firstName: 'กฤตนัย' },
  { id: 63015024, lastName: 'ชโลธร', firstName: 'จิรพัฒน์'},
  { id: 363015025, lastName: 'เอก', firstName: 'จิรศิลป์'},

];


export default function list() {
  return (
   

    <Layout>
    <div> <h1>รายชื่อ</h1> </div>
    <div style={{ height: 400, width: '100%' }}>
    <DataGrid
      rows={rows}
      columns={columns}
      pageSize={5}
      rowsPerPageOptions={[5]}
      checkboxSelection
    />
  </div>
    <div>
      <br></br>
    <Button variant="contained" startIcon={<Add />}>
        ส่ง
      </Button>
      
      </div>
    </Layout>
    
  );
}