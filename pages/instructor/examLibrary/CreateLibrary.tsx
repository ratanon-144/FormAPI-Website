import { useCallback, useEffect, useState } from 'react'
import Layout from "@/components/Layouts/Layout";
import { Box, Button, Input, OutlinedInput, Paper, Stack, TextField, Typography, FormControl, Grid, Select, MenuItem, SelectChangeEvent, InputLabel } from "@mui/material";
import NativeSelect from '@mui/material/NativeSelect';
import ImageSearchIcon from '@mui/icons-material/ImageSearch';
export default function CreateLibrary() {
  const [age, setAge] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  const [note, setNote] = useState({
    title: "",
    titleDes: "",
  });
  const [allNote, setAllNote] = useState([{}]);

  function onNoteValueChange(event: {
    target: { name: string; value: string };
  }) {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function OnNoteSubmit(e: any) {
    setAllNote((prevAllNote) => [...prevAllNote, note])
  }

  return (
    <Layout>
    <Box sx={{ border: '2px solid black' }} >
      <Stack spacing={1} sx={{  border: '2px solid red', margin: "auto",  width: "50%", display: "flex", flexDirection: "column",  bgcolor: "pink" }} >
        <Paper sx={{  borderTop: "8px solid rgb(103, 58, 183)", borderRadius: "8px", padding: "15px 25px", textTransform: "capitalize",marginTop: "10px",}}>
          <Stack  direction="row"  component="form"  sx={{    width: '35ch',  }}  spacing={4}  noValidate>
          <Typography text-align='left' variant='h5'>ชื่อเรื่อง</Typography>
            <Input placeholder="ชื่อเรื่อง" name="title" value={note.title}
              onChange={onNoteValueChange} /> 
          </Stack>
        </Paper>
        {allNote && allNote.map((allNote: any, index) => {
          return (
            <Paper key={index} sx={{ borderRadius: "8px", padding: "30px 25px", textTransform: "capitalize", backgroundColor: "white", }}>
              <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid item   >
                  <TextField required id="outlined-required" label="Required" defaultValue="Hello World" />
                </Grid>
                <Grid item   >
                  <Button >
                    <ImageSearchIcon />
                  </Button>
                </Grid>
                <Grid item    >
                  <FormControl sx={{ m: 1, minWidth: 320 }}>
                  <InputLabel id="demo-simple-select-autowidth-label">ตังค่าเลือกคำตอบ</InputLabel>
        <Select labelId="demo-simple-select-autowidth-label" id="demo-simple-select-autowidth" 
        value={age}  onChange={handleChange} label="ตังค่าเลือกคำตอบ" >
          <MenuItem value={1}>ย่อหน้า</MenuItem>
          <MenuItem value={2}>คำต่อสั้นๆ</MenuItem>
          <MenuItem value={3}>หลายตัวเลือก</MenuItem>
          <MenuItem value={4}>ช่องทำเครื่องหมาย</MenuItem> 
        </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </Paper>)
        })}
        <Paper sx={{ borderRadius: "8px", padding: "30px 25px", textTransform: "capitalize", backgroundColor: "white", }}>
          <Stack direction="row" justifyContent="flex-end" alignItems="flex-start" spacing={2}>
            <Button variant="contained" onClick={() => OnNoteSubmit(note)}>เพื่ม</Button>
            <Button variant="contained" color="success"  >บันทึก</Button>
            <Button variant="contained" color="error"   href='/instructor/examLibrary'>ยกเลิก</Button>

          </Stack>
        </Paper>

      </Stack>
    </Box>
    </Layout>

  );
}
