import {  Box,  Button,   Chip,  Card,   Paper,  Stack,  TextField,Typography,} from "@mui/material";
import React from "react";
import {DataGrid,  getGridSingleSelectOperators, GridActionsCellItem, GridCellParams, GridColDef,  GridColumns,  GridComparatorFn,  GridFilterItem,  GridRowsProp,} from "@mui/x-data-grid";
import Layout from "@/components/Layouts/Layout";
import { randomCreatedDate,  randomTraderName,  randomUpdatedDate,} from "@mui/x-data-grid-generator";
const tagsSortComparator: GridComparatorFn<any> = (tags1: any, tags2: any) => {
    return tags1.length - tags2.length;
};

const tagsFilterOperators = getGridSingleSelectOperators()
    .filter((operator) => operator.value === "isAnyOf")
    .map((operator) => {
        const newOperator = { ...operator };
        const newGetApplyFilterFn = (   filterItem: GridFilterItem,   column: GridColDef
        ) => {
            return (params: GridCellParams): boolean => {
                let isOk = true;
                filterItem?.value?.forEach((fv: any) => {
                    isOk = isOk && params.value.includes(fv);
                });
                return isOk;
            };
        };
        newOperator.getApplyFilterFn = newGetApplyFilterFn;
        return newOperator;
    });

export default function BasicRowEditingGrid() {
    return (
        <Layout>
            <Stack spacing={2}>
                <Box sx={{ margin: "10", padding: "30px 25px" }}>
                    <Typography text-align='left' variant='h3'>
                        สร้างการทดสอบ
                    </Typography>
                </Box>
                <Card
                    sx={{
                        margin: "10",
                        padding: "30px 25px",
                        textTransform: "capitalize",
                    }}>
                    <Stack direction='row' spacing={2}>
                        <Box>
                            <TextField
                                fullWidth
                                label='ชื่อการทดสอบ'
                                id='fullWidth'
                                focused
                                size='small'
                            />
                        </Box>
                        {/* ครั้งที่ */}
                        <Box>
                            <TextField
                                fullWidth
                                label='ครั้งที่'
                                id='fullWidth'
                                focused
                                size='small'
                            />
                        </Box>
                        <Button component='a' href='/gom'>
                            Click
                        </Button>
                    </Stack>
                </Card>
                <Card
                    sx={{
                        margin: "10",
                        padding: "30px 25px",
                        textTransform: "capitalize",
                    }}>
                    <Stack spacing={2}>
                        <Typography text-align='left' variant='h5'>
                            ตั้งเวลา
                        </Typography>
                        <div style={{ height: 300, width: "100%" }}>
                            <DataGrid
                                editMode='row'
                                rows={rows}
                                columns={columns}
                                experimentalFeatures={{ newEditingApi: true }}
                                checkboxSelection
                            />
                        </div>
                    </Stack>
                </Card>
                <Card
                    sx={{
                        margin: "10",
                        padding: "30px 25px",
                        textTransform: "capitalize",
                    }}>
                    <Stack spacing={2}>
                        <Typography text-align='left' variant='h5'>
                            ตั้งต่าการทดสอบ
                        </Typography>
                        <div style={{ height: 400, width: "100%" }}>
                            <DataGrid
                                editMode='row'
                                rows={rowsa}
                                columns={columns2}
                                experimentalFeatures={{ newEditingApi: true }}
                            />
                        </div>
                    </Stack>
                </Card>
            </Stack>
        </Layout>
    );
}

const columns: GridColumns = [
    { field: "id", headerName: "Sec", width: 100 },
    { field: "dateCreated", headerName: "เริ่มและวันที่",  type: "date",  width: 150,  editable: true,   },
    { field: "lastLogin", headerName: "วันเวลาสินสุด", type: "dateTime", width: 250, editable: true,},
];

const rows: GridRowsProp = [
    {
        id: 101,
        dateCreated: randomCreatedDate(),
        lastLogin: randomUpdatedDate(),
    },
    {
        id: 102,
        dateCreated: randomCreatedDate(),
        lastLogin: randomUpdatedDate(),
    },
    {
        id: 53,
        dateCreated: randomCreatedDate(),
        lastLogin: randomUpdatedDate(),
    },
];

const rowsa: GridRowsProp = [
    {id: 1,german: "der Kuchen", english: "cake",  tags: ["food", "baked goods", "kitchen"],},
    { id: 2, german: "rot", english: "red", tags: ["colors"] },
    { id: 3, german: "das Auto", english: "car", tags: ["vehicles", "garage"] },
    { id: 4, german: "fliegend", english: "flying", tags: [] },
    { id: 5, german: "grün", english: "green", tags: ["colors", "nature"] },
    { id: 6, german: "der Hubschrauber",  english: "helicopter",  tags: ["vehicles"], },
    { id: 7, german: "die Gabel", english: "fork", tags: ["kitchen"] },
    {   id: 8,  german: "das Hemd",  english: "shirt",   tags: ["clothes", "closet"], },
    { id: 9, german: "tatsächlich", english: "actual", tags: [] },
    { id: 10, german: "der Bus", english: "bus", tags: ["school", "vehicles"] },
];

const columns2: GridColDef[] = [
    { field: "id", headerName: "ID", width: 30, filterable: false },
    { field: "german", headerName: "German", width: 150 },
    { field: "english", headerName: "English", width: 100 },
    { field: "tags", headerName: "Tags", width: 300, type: "singleSelect",  editable: true,
        // eslint-disable-next-line react/jsx-key
        valueOptions: [...new Set<Array>(rows.map((o) => o.tags).flat())]
        , renderCell: (params) => (
            <Stack direction='row' spacing={0.25}>
                {params.row.tags.map((tag: string) => (
                    // eslint-disable-next-line react/jsx-key
                    <Chip label={tag} />
                ))}
            </Stack>
        ),
        sortComparator: tagsSortComparator,
        filterOperators: tagsFilterOperators,
    },
];
