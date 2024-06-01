import * as React from 'react';
import './style.css'
import Drawer from '@mui/material/Drawer';

import { AppState, BlogType } from '../dashBoard/types';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../dashBoard/actions'
import { SelectChangeEvent } from '@mui/material/Select';
import {  Box, Button, FormControl,  InputLabel, ListItemButton, ListItemText, MenuItem, Select, TextField } from '@mui/material';
export default function SideBar() {
  const [open, setOpen] = React.useState(false);

  const [form, setForm] = React.useState<BlogType>({
    id:'',
    title:'',
    categories:'',
    description:'',
    likes:0
  });


  const dispatch=useDispatch()
  const {sideBlog,editPayload}=useSelector((state:AppState)=>state.blogReducer)
 
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
    if(!newOpen){
        dispatch(actions.sideBlog('',null))
    }
  };
  React.useEffect(()=>{

     if(sideBlog){
        setOpen(true)
     }
     else{
      setOpen(false)
     }
     
     if(sideBlog.localeCompare('Edit')===0 && editPayload){
        setForm({...editPayload})
     }
  },[sideBlog,editPayload])
  const handleChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
    event.preventDefault()
    const { name, value } = event.target;
     setForm({...form, [name]:value})
  }
  const handleSelectChange = (event: SelectChangeEvent<string>) => {
    event.preventDefault()
    const { name, value } = event.target;
     setForm({...form, [name]:value})
  };
  const DrawerList = (
<Box sx={{ mt: 1,mb:1 }}>
<Box sx={{ m:2 }}>
<ListItemButton className="form" component="a" href="#simple-list">
  <ListItemText primary={sideBlog+' Blog Post'} />
</ListItemButton>
</Box>
<Box sx={{ m:3 }}>
    <FormControl fullWidth className='form'>
    <TextField id="outlined-basic" label="Title" variant="outlined" name='title' value={form.title} onChange={handleChange} />
    </FormControl>
    </Box>
    <Box sx={{ m:3 }}>    <FormControl fullWidth className="form">
  <InputLabel id="demo-simple-select-label" >Category</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={form.categories}
    label="Category"
    name='categories'
    onChange={handleSelectChange}
  >
    <MenuItem value={'Sports'}>Sports</MenuItem>
    <MenuItem value={'Cinema'}>Cinema</MenuItem>
    <MenuItem value={'Politics'}>Politcs</MenuItem>
  </Select>
</FormControl>
</Box>
<Box sx={{ m:3 }}> 
<TextField id="outlined-basic"  label="Description" value={form.description} variant="outlined" name='description' onChange={handleChange} />
  
</Box> 
<Box sx={{ m:3 }}  display="flex" justifyContent="space-between"> 
<Button variant="contained"  onClick={()=>sideBlog.localeCompare('Edit')?dispatch(actions.addBlog(form)):dispatch(actions.editBlog(form))}>{sideBlog} Blog</Button>
<Button variant="outlined"  onClick={()=>dispatch(actions.sideBlog('',null))}>Cancel</Button>

</Box>
    </Box>
  );

  return (
    <div>
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
