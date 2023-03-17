import * as React from "react";
import {DataGrid,  GridActionsCellItem,  GridRowId,   GridColumns,} from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import Layout from "@/components/Layouts/Layout";
import { Box,   Button,   Card,   MenuItem,   TextField,   Typography,Stack} from "@mui/material";
import { CouresData } from "@/models/coures.model";
const currencies = [
    { value: "เทอม 1", label: "1/2565" },
    { value: "เทอม 2", label: "2/2565" },
    { value: "เทอม 3", label: "3/2565" },
];

const initialRows = [
    { id: 1,  tite_name: "Application Layer",  data_stimp: "09/09/65 - 14:00 น.",  status: "กำลังดำเนินการอยู่",},
    {id: 2, tite_name: "Transport Layer", data_stimp: "09/09/65 - 14:00 น.", status: "กำลังดำเนินการอยู่",},
    { id: 3, tite_name: "Link Layer", data_stimp: "09/09/65 - 14:00 น.", status: "กำลังดำเนินการอยู่",},
    {id: 4,tite_name: "Application Layer",data_stimp: "09/09/65 - 14:00 น.",status: "กำลังดำเนินการอยู่",},
];
// เพิ่มข้อมูลตรงนี้ 
type Row = typeof initialRows[number];
export default function ColumnTypesGrid() {
    const [rows, setRows] = React.useState<Row[]>(initialRows);
    const [selectedCoures, setSelectedCoures] = React.useState<CouresData | null>(null);
    const showDialog = () => {
        if (selectedCoures === null) {
          return;
        }
    }
    
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
        () => [
            { field: "id", type:'number', headerName: "ครั้งที่", width: 150, headerClassName: "super-app-theme--header", },
            {  field: "tite_name",  type: "string", headerName: "ชื่อการทดสอบ", flex: 1, headerClassName: "super-app-theme--header",},
            {  field: "data_stimp",  type: "string", headerName: "วัน-เวลา", flex: 1, headerClassName: "super-app-theme--header",},
            {  field: "status",  type: "string", headerName: "สถานะ", flex: 1, headerClassName: "super-app-theme--header",},
        ],
        []
    );
    const [status, setStatus] = React.useState("connected");

    return (
        <> 
        <Layout>
            <Stack spacing={2}>
                <Typography Text-align='' variant='h2'>
                สร้างการทดสอบ
                </Typography>
                <Card
                    sx={{
                        margin: "10",
                        padding: "30px 25px",
                        textTransform: "capitalize",
                    }}>
                    <Box
                        sx={{
                            height: 600,
                            width: "100%",
                            "& .super-app-theme--header": {
                                backgroundColor: "#FF9800",
                                color: "#FFFF",
                            },
                        }}>
                        <DataGrid columns={columns} rows={rows} />
                    </Box>
                    <Box display='flex' justifyContent='flex-end'>
                        <Button
                            sx={{ margin: 1 }}
                            size='large'
                            variant='contained'  href='/instructor/testStatus/createTest'>
                            สร้างการทดสอบ
                        </Button>
                    </Box>
                </Card>
            </Stack> 
        </Layout>
        </>
    );
}
