import { useCallback, useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import Layout from "@/components/Layouts/Layout";
import { Stack } from '@mui/system';
import { Box, MenuItem ,Menu} from '@mui/material';
 
interface ChipData {
  key: number | undefined;
  label: string | undefined;
   
}
interface MenuItemIndex {
  key: number | undefined;
  label: string | undefined;
   
}
const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(0.5),
}));


 

               

export default function ChipsArray() {
  const [chipData, setChipData] =  useState<ChipData[]>([]);
  const [MenuItemIndexData, setMenuItemIndex] =  useState<MenuItemIndex[]>([    {key:0, label:"ยาก" }, {key:3, label:"ปลานกลาง" }, {key:2, label:"ง่าย" }]);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    console.log(MenuItemIndexData.length)
    if(MenuItemIndexData.length !== 0){
      setAnchorEl(event.currentTarget); 
    } else { setAnchorEl(null);}
  };
  const handleClose = () => { 
    setAnchorEl(null);
  };



  const handleAdd = (midDelete:MenuItemIndex,chipToAdd: ChipData) => () => {
    console.log(midDelete)
    handleClose();
    //  setMenuItemIndex((MenuItemIndex) => MenuItemIndex.filter((MenuItemIndex) => MenuItemIndex !== MenuItemIndex));
    setMenuItemIndex((mid) => mid.filter((mid) => mid !== midDelete));
    setChipData((prevChips) => [...prevChips, chipToAdd] )
    
  }
  const handleDelete = (chipToDelete: ChipData,midAdd:MenuItemIndex) => () => {
    setMenuItemIndex((prevmidAdd) => [...prevmidAdd, midAdd])
    setChipData((chips) => chips.filter((chip) => chip !== chipToDelete));
  };


  return (
    <Layout>
    <Paper
      sx={{ display: 'flex', justifyContent: 'center',  flexWrap: 'wrap',  listStyle: 'none',  p: 0.5,   m: 0,  }}  component="ul">
      <Stack direction="row" spacing={1}>
        <Box>
          <Chip label="เพิ่ม" color='primary'  onClick={handleClick} />
          <Menu id="demo-positioned-menu" aria-labelledby="demo-positioned-button" anchorEl={anchorEl}  open={open} onClose={handleClose}
        anchorOrigin={{ vertical: 'top',    horizontal: 'left',  }}transformOrigin={{  vertical: 'top',  horizontal: 'left',}}>
          {MenuItemIndexData.map((data,index) => {
        return (
          <ListItem key={index}> 
          <MenuItem onClick={handleAdd(data,data)}>{data.label}</MenuItem>
        </ListItem>
         
        );
      })}
       
      </Menu>
      </Box>
      {chipData.map((data,index) => {
        return (
          <ListItem key={index}> 
            <Chip 
              label={data.label}
              onDelete={handleDelete(data,data)}
            />
          </ListItem>
        );
      })}
      </Stack>
    </Paper>
    </Layout>
  );
}