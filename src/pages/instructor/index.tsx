import Layout from "@/components/Layouts/Layout";
import withAuth from "@/components/withAuth";
import Moment from "react-moment";
import React from "react";
import { useAppDispatch } from "@/store/store";
import { courseSelector, getCourses } from "@/store/slices/courseSlice";
import { userID, getSession } from "@/store/slices/userSlice";
import { useSelector } from "react-redux";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import { DataGrid, GridRenderCellParams, GridRowModesModel, GridColDef } from "@mui/x-data-grid";
import { Card, IconButton, Stack, Typography } from "@mui/material";
import router from "next/router";
import Link from "next/link";
type Props = {};

const Instructor = ({ }: Props) => {
  const dispatch = useAppDispatch();
  const courseList = useSelector(courseSelector);
  const userId = useSelector(userID);
  React.useEffect(() => {
    dispatch(getCourses());
    dispatch(getSession());
  }, [dispatch]);
  React.useEffect(() => {
    setRows(courseList);
  }, [courseList]);


  const [rows, setRows] = React.useState(courseList);
  const [rowModesModel, setRowModesModel] = React.useState<GridRowModesModel>({});

  const columns: GridColDef[] = [

    { field: 'id_code', headerName: 'รหัสวิชา', width: 120, editable: true },
    { field: 'name', headerName: 'ชื่อวิชา', flex: 1, editable: true },
    {
      headerName: "TIME", field: "เวลาสร้าง", width: 220,
      renderCell: ({ value }: GridRenderCellParams<any>) => (
        <Typography variant="body1">
          <Moment format="DD/MM/YYYY HH:mm">{value}</Moment>
        </Typography>
      ),
    }, {
      headerName: "ACTION", field: ".", width: 120,
      renderCell: ({ row }: GridRenderCellParams<any>) => (
        <Stack direction="row">
          <IconButton
            aria-label="edit"
            size="large"
            onClick={() => router.push("/instructor/edit?id=" + row.id)}
          >
            <EditIcon fontSize="inherit" />
          </IconButton>
          <IconButton
            aria-label="delete"
            size="large"
            onClick={() => router.push("/instructor/edit?id=" + row.id)}
          >
            <DeleteIcon fontSize="inherit" />
          </IconButton>
        </Stack>
      ),
    },

  ];


  return (
    <Layout>
      <Stack spacing={2}>
        <Typography text-align='left' variant='h3'>รายการวิชา {userId}</Typography>
        <Card sx={{ margin: "10", padding: "30px 25px", textTransform: "capitalize", }}>
          <Stack spacing={2}>
            <Stack direction="row" justifyContent="flex-end" alignItems="flex-start" spacing={2}>
              <Button size='large' variant='contained' href='/instructor/add'>เพิ่มรายวิชา</Button>
            </Stack>
            <Box sx={{ height: 600, width: "100%", "& .super-app-theme--header": { backgroundColor: "#FF9800", color: "#FFF" } }}>
              <DataGrid
                rows={rows ?? []}
                columns={columns}
              />
            </Box>

          </Stack>

          {/* <Box>
      <Link href="/instructor/add" passHref>  
        <Button>
          เพิ่มรายวิชา
        </Button>
        </Link>
      </Box> */}
        </Card>
      </Stack>
    </Layout>
  );
};

export default withAuth(Instructor);