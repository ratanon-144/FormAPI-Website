import Layout from "@/components/Layouts/Layout";
import { Edit, LocationOn, PersonAdd } from "@mui/icons-material";
import { Avatar, Box, Button,Card,    Chip,    Divider,    IconButton,    ListItem,ListItemIcon,  ListItemText,   Stack,   Switch,   TextField,   Typography,} from "@mui/material";
import { grey } from "@mui/material/colors";
import { DataGrid, GridActionsCellItem, GridColDef, GridColumns } from "@mui/x-data-grid";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
 type Props = {};

 const initialRows = [
    {
        id: 1, 
        titename: "Application Layer",
    },  {
        id: 2, 
        titename: "Transport Layer",
    },  {
        id: 3, 
        titename: "Network Layer",
    }, {
        id: 4, 
        titename: "Link Layer",
    },  {
        id: 5, 
        titename: "Wireless and Mobile Network",
    },  {
        id: 6, 
        titename: "Multimedia Networking",
    },
  
];

type Row = typeof initialRows[number];
export default function Library({}: Props) {
    const [rows, setRows] = React.useState<Row[]>(initialRows);
    const deleteUser = React.useCallback(
        (id: GridRowId) => () => {
            setTimeout(() => {
                setRows((prevRows) => prevRows.filter((row) => row.id !== id));
            });
        },
        []
    );

    const duplicateUser = React.useCallback(
        (id: GridRowId) => () => {
            setRows((prevRows) => {
                const rowToDuplicate = prevRows.find((row) => row.id === id)!;
                return [...prevRows, { ...rowToDuplicate, id: Date.now() }];
            });
        },
        []
    );
    const columns = React.useMemo<GridColumns<Row>>(
        () => [  { field: "id", type: "string", headerName: "ลำดับ",  width: 150,   headerClassName: "super-app-theme--header", },
            { field: "titename", type: "string",  headerName: "ชื่อเรื่อง",  flex: 1,headerClassName: "super-app-theme--header"}, 
            {  field: "actions",type: "actions",headerName: "Actions",   width: 200,  headerClassName: "super-app-theme--header", 
             getActions: (params) => [
                    // eslint-disable-next-line react/jsx-key
                    <GridActionsCellItem icon={<ModeEditIcon />}  label='Editter' onClick={duplicateUser(params.id)}/>, 
                    // eslint-disable-next-line react/jsx-key
                    <GridActionsCellItem   icon={<DeleteIcon />}   label='Delete' onClick={deleteUser(params.id)}  />,],},
        ],
        [duplicateUser, deleteUser]
    );
    const [status, setStatus] = React.useState("connected");
    return (
        <Layout>
          <Stack spacing={2}>
                <Box><Typography text-align='left' variant='h3'>คลังข้อสอบ</Typography></Box>  
                <Card sx={{margin: "10", padding: "30px 25px",  textTransform: "capitalize", }}>
                    <Stack spacing={2}>
                    <Stack  direction="row" justifyContent="flex-end"alignItems="flex-start"spacing={2}>  
                        <Button  size='large' variant='contained' href='/instructor/examLibrary/CreateLibrary'>
                           เพิ่มเรื่อง
                        </Button>
                    </Stack>
                        <Box sx={{ height: 600,width: "100%",  "& .super-app-theme--header": {  backgroundColor: "#FF9800", color: "#FFFF", },}}>
                            {/* <DataGrid    rows={rows2} columns={columns2}  pageSize={5} rowsPerPageOptions={[5]} checkboxSelection/> */}
                            {/* <DataGrid rows={rows} columns={columns}  pageSize={5} rowsPerPageOptions={[5]}  getRowHeight={() => 'auto'}   /> */}
                            <DataGrid columns={columns} rows={rows} />
                        </Box>
             
                    </Stack>
                </Card>
              </Stack>
        </Layout>
    );
}
