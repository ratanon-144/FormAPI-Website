import Layout from "@/components/Layouts/Layout";
import { Box,   Button,   Card,   Paper,Stack,MenuItem ,Menu,   TextField,   Typography, Checkbox, FormGroup, FormControlLabel, FormControl, InputLabel, Input,} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { useMemo ,useState,} from "react";
import {   DataGrid,   GridActionsCellItem,   GridCellCheckboxRenderer,   GridColDef,   GridColumns,   GridRenderCellParams,   GridToolbar,   GridValueGetterParams,} from "@mui/x-data-grid";
import dayjs, { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DesktopTimePicker, StaticTimePicker, TimePicker } from "@mui/x-date-pickers";
import { TimeField } from '@mui/x-date-pickers/TimeField';

type Props = {};


const rows1 = [
    { id: 101,  },
    { id: 102, firstName: "09/09/65, 13:00:00", lastName: "60 นาที" },
    { id: 53, firstName: "ตั้งวันที่", lastName: "ตั้งเวลา" }
];

const rows2 = [
    { id: 1,   title: "Application Layer",     level: "X",     setchoice: "X",   setrandom: "X",    answer: "X",},
    { id: 2,title: "Transport Layer", level: "X",setchoice: "X",setrandom: "X", answer: "X", },
];
 
  const CountButton = () => { 
    return ( 
        <FormGroup>
        <FormControlLabel  control={<Checkbox  />} label="ยาก" />
        <FormControlLabel control={<Checkbox />} label="ปลานกลาง" />
        <FormControlLabel control={<Checkbox />} label="ง่าย" />
      </FormGroup>
     
    );
  };
  const CountButto2n = () => { 
    return ( 
        <FormControl variant="standard"> 
        <TextField id="standard-basic"   variant="standard"  inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}/>
        <TextField id="standard-basic"  variant="standard"  inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}/>
        <TextField id="standard-basic"  variant="standard"  inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}/>
     </FormControl>
    );
  };

 


  const DatePicker1 = () => { 
    const [value, setValue] = useState<Dayjs | null>(dayjs('2022-04-07'));
    return ( 
        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker 
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
        />
      </LocalizationProvider>
    );
  };

  const DateTime1 = () => {  
    const [value, setValue] = useState<Dayjs | null>(dayjs('2022-04-17T15:30'));
return (
<LocalizationProvider dateAdapter={AdapterDayjs}> 
    <TimeField
      value={value}
      onChange={(newValue) => setValue(newValue)}
    />
</LocalizationProvider>
);
  };


export default function CreateTest() 

{
  
    const columns1: GridColDef[] =
 [
        { field: "id", headerName: "Sec", width: 100 },
    { field: "firstName",headerName: "เริ่มและวันที่",width: 250,renderCell:({value}:GridRenderCellParams<string>)=> <DatePicker1 />  },
    { field: "lastName", headerName: "เวลา", width: 200 ,renderCell:({value}:GridRenderCellParams<string>)=> <DateTime1 />  },
];


    const columns2 = useMemo<GridColumns>(() => [
           { field: "id", headerName: "ลำดับ", width: 10 ,},
           { field: "title", headerName: "ชื่อเรื่อง", width: 150 },
           { field: "level", headerName: "Level", width: 180,
           renderCell:({value}:GridRenderCellParams<string>)=> <CountButton/>  
        },
           { field: "setchoice", headerName: "จำนวนข้อ", width: 200 ,renderCell:({value}:GridRenderCellParams<string>)=> <CountButto2n/>  },
           { field: "setrandom", headerName: "สุ่ม", width: 100  ,renderCell:({value}:GridRenderCellParams<string>)=> <Checkbox /> },
           { field: "answer", headerName: "สลับตัวเลือก", width: 100 ,renderCell:({value}:GridRenderCellParams<string>)=> <Checkbox /> },
           { field: "actions", type: "actions",   headerName: "Actions",  width: 200,
            getActions: (params) => [
                // eslint-disable-next-line react/jsx-key
                <GridActionsCellItem icon={<ModeEditIcon />} label='Editter' />, // eslint-disable-next-line react/jsx-key
                <GridActionsCellItem icon={<DeleteIcon />} label='Delete' />,
            ],
        }, 
    ],[]
    );

    return (
        <Layout>
            <Stack spacing={2}>
                <Box sx={{ margin: "10", padding: "30px 25px" }}>
                    <Typography text-align='left' variant='h3'>
                        สร้างการทดสอบ
                    </Typography>
                </Box>
                <Card  sx={{  margin: "10",   padding: "30px 25px",  textTransform: "capitalize", minWidth: 300,  }}>
                    <Stack direction='row' spacing={2}>
                        <Box>
                            <TextField  fullWidth     label='ชื่อการทดสอบ'     id='fullWidth'    focused    size='small' />
                        </Box>
                        <Box>
                            <TextField   fullWidth  label='ครั้งที่' id='fullWidth'  focused  size='small' />
                        </Box>
                        {/* <Button component='a' href='/gom'>
                            Click
                        </Button> */}
                    </Stack>
                </Card>
                <Card  sx={{  margin: "10",  padding: "30px 25px",   textTransform: "capitalize",  }}>
                    <Stack spacing={2}>
                        <Typography text-align='left' variant='h5'>
                            ตั้งเวลา
                        </Typography>
                        <Box sx={{ height: 300, width: "100%","& .super-app-theme--header": {backgroundColor: "#FF9800", color: "#FFFF",}, }}>
                            <DataGrid  editMode='row' rows={rows1}columns={columns1} pageSize={5}  rowsPerPageOptions={[5]}  getRowHeight={() => 'auto'}  checkboxSelection/>
                        </Box>
                    </Stack>
                </Card>
                <Card sx={{margin: "10", padding: "30px 25px",  textTransform: "capitalize", }}>
                    <Stack spacing={2}>
                    <Stack  direction="row" justifyContent="space-between"alignItems="flex-start"spacing={2}>
                        <Typography text-align='left' variant='h5'>
                            ตั้งค่าการทดสอบ
                        </Typography>
                        <Button sx={{ margin: 1 }} size='large' variant='contained'>
                           เพิ่มเรื่อง
                        </Button>
                    </Stack>
                        <Box sx={{ height: 400,width: "100%",  "& .super-app-theme--header": {  backgroundColor: "#FF9800", color: "#FFFF", },}}>
                            {/* <DataGrid    rows={rows2} columns={columns2}  pageSize={5} rowsPerPageOptions={[5]} checkboxSelection/> */}
                            <DataGrid rows={rows2} columns={columns2}  pageSize={5} rowsPerPageOptions={[5]}  getRowHeight={() => 'auto'}   />
                        </Box>
                    <Stack   direction="row" justifyContent="flex-end" alignItems="baseline"spacing={1}>
                        <Button  size='medium' variant='contained'>บันทึก</Button>
                        <Button size='medium' variant='contained' color="error">ยกเลิก</Button>
                        <Button  size='medium' variant='contained' color="success">สร้างLink</Button> 
                    </Stack>
                    </Stack>
                </Card>
              </Stack>
        </Layout>
    );
}
