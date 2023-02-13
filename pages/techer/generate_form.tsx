import Breadcrumbs from '@/components/Layouts/Breadcrumbs';
import Layout from '@/components/Layouts/Layout'
import { Box, TextField, Grid, Typography, Paper, styled } from "@mui/material";
import React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  color: theme.palette.text.primary,
}));


const columns: GridColDef[] = [
  { field: 'id', headerName: 'id', width: 70 },
  { field: 'TiteName', headerName: 'ชื่อเรื่อง', width: 130 },
  { field: 'Level', headerName: 'Level', width: 130 },
  { field: 'NumTite', headerName: 'จำนวนข้อง', type: 'number', width: 90, },
  { field: 'fullName', headerName: 'Full name', description: 'This column has a value getter and is not sortable.', sortable: false, width: 160, valueGetter: (params: GridValueGetterParams) => `${params.row.firstName || ''} ${params.row.lastName || ''}`, },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];
function FormRow() {
  return (
    <React.Fragment>
      <Grid item xs={6}>
        <Item>
          <TextField
            id="outlined-basic"
            label="ชื่อการทดสอบ"
            defaultValue="การทดสอบ"
          />   </Item>
      </Grid>
      <Grid item xs={6}>
        <Item>  <TextField
          id="outlined-basic"
          label="ครั้งที่"
          defaultValue="1"
        /> </Item>
      </Grid>
    </React.Fragment>
  );
}
export default function generate_form() {
  return (
    <Layout>
      <Box>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item>
            <StyledPaper
              sx={{
                my: 1,
                mx: 'auto',
                p: 2,
              }}
            >
              <Breadcrumbs>
              </Breadcrumbs>
            </StyledPaper>
          </Grid>
          <Grid container item spacing={2} p={2}>
            <FormRow />
          </Grid>
          <Grid container item spacing={1} wrap="nowrap" p={2}>
            <Grid container wrap="nowrap" spacing={2}>
              <Grid item xs>
                <StyledPaper
                  sx={{
                    my: 1,
                    mx: 'auto',
                    p: 2,
                  }}
                >
                  <div style={{ height: 400, width: '100%' }}>
                    <DataGrid
                      rows={rows}
                      columns={columns}
                      pageSize={5}
                      rowsPerPageOptions={[5]}
                      checkboxSelection
                    />
                  </div>
                </StyledPaper>
              </Grid>
            </Grid>
          </Grid>
          <Grid container item spacing={2} p={2}>
            <StyledPaper
              sx={{
                my: 1,
                mx: 'auto',
                p: 2,
              }}
            >
              <Grid container wrap="nowrap" spacing={2}>
                <Grid item xs>
                  <Typography>Truncation should be conditionally applicable on this long line of text
                    as this is a much longer line than what the container can support. </Typography>
                </Grid>
                <Grid item xs>
                  <Typography>Truncation should be conditionally applicable on this long line of text
                    as this is a much longer line than what the container can support. </Typography>
                </Grid>
              </Grid>
            </StyledPaper>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  )
}