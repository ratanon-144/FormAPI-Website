import * as React from 'react';
import { DataGrid, GridActionsCellItem,GridRowId,GridColumns,} from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import Layout from "@/components/Layouts/Layout";
import { Box, Button, Card, MenuItem, TextField, Typography } from "@mui/material";
import Stack from '@mui/material/Stack';
const currencies = [
  { value: "เทอม 1", label: "1/2565", },
  { value: "เทอม 2", label: "2/2565", },
  { value: "เทอม 3", label: "3/2565", },
];

const initialRows = [
  { id: 1, subjectid: '01076010', subjectname: 'Computer Network', isAdmin: true, secid: '101' },
  { id: 2, subjectid: '01076010', subjectname: 'Computer Network', isAdmin: true, secid: '53' },
  { id: 3, subjectid: '01076015', subjectname: 'Computer Engineering Professional Development', isAdmin: true, secid: '101' },
];

type Row = typeof initialRows[number];
export default function ColumnTypesGrid() {
  const [rows, setRows] = React.useState<Row[]>(initialRows);
  const deleteUser = React.useCallback(
    (id: GridRowId) => () => {
      setTimeout(() => {
        setRows((prevRows) => prevRows.filter((row) => row.id !== id));
      });
    },
    [],
  );

  const duplicateUser = React.useCallback(
    (id: GridRowId) => () => {
      setRows((prevRows) => {
        const rowToDuplicate = prevRows.find((row) => row.id === id)!;
        return [...prevRows, { ...rowToDuplicate, id: Date.now() }];
      });
    },
    [],
  );

  const columns = React.useMemo<GridColumns<Row>>(
    () => [
      { field: 'subjectid', type: 'string', headerName: 'รหัสวิชา', width: 150 },
      { field: 'subjectname', type: 'string', headerName: 'ชื่อวิชา', flex: 1 },
      {
        field: 'secid', type: 'singleSelect',
        headerName: 'กลุ่ม', width: 100,
        valueOptions: ({ row }) => {
          return ['101', '102', '53'];
        },
      },
      {
        field: 'actions', type: 'actions', headerName: 'Actions', width: 200,
        getActions: (params) => [
          // eslint-disable-next-line react/jsx-key
          <GridActionsCellItem
            icon={<ModeEditIcon />}
            label="Editter"
            onClick={duplicateUser(params.id)}

          />,// eslint-disable-next-line react/jsx-key
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={deleteUser(params.id)}
          />,
        ],
      },
    ],
    [duplicateUser, deleteUser],
  );
  const [status, setStatus] = React.useState('connected');
  return (
    <Layout>
      <Stack spacing={2}>
        <Typography Text-align="" variant="h2">รายวิชา</Typography>
        <Card sx={{ margin: "10", padding: "30px 25px", textTransform: "capitalize", }}>
          <Box component="form" sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" }, }} noValidate autoComplete="off">
            <div>
              <TextField id="outlined-select-currency" select label="ภาคการศึกษาที่">
                {currencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </div>
          </Box>
          <Box style={{ height: 500, width: '100%' }}>
            <DataGrid columns={columns} rows={rows} />
          </Box>
          <Box display="flex" justifyContent="flex-end" >
            <Button sx={{ margin: 1 }} size="large" variant="contained" >สร้างรายวิชา </Button>
          </Box>
        </Card>
      </Stack>
    </Layout>
  );
}