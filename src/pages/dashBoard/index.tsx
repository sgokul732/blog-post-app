
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';

import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import './style.css'
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from 'react-redux';
import {  AppState, BlogType } from './types';
import { Button } from '@mui/material';
import * as deleteAction from '../deleteBlog/actions'
import * as actions from './actions'
import DeleteBlog from '../deleteBlog';
import SideBar from '../Sidebar';
function DashBoard() {
    const dispatch=useDispatch()
    const {blogs}=useSelector((state:AppState)=>state.blogReducer)
    const {shouldDelete}=useSelector((state:AppState)=>state.deleteReducer)
    return (
        <div className="dashBoard">
          <SideBar/>
        <Button variant="contained" className='addBlog' onClick={()=>dispatch(actions.sideBlog('Add',null))}>+ Add Blog</Button>
        <div className="blogs">
       { blogs.map((ele:BlogType)=>{
  return <Card sx={{ maxWidth: 800 }} key={ele.id}>
  <CardHeader
    avatar={
      <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
        R
      </Avatar>
    }
    title={ele.title}
    subheader={ele.categories}
  />
  <CardContent>
    <Typography variant="body2" color="text.secondary">
{ele.description}
    </Typography>
  </CardContent>
  <CardActions >
  <IconButton aria-label="add to favorites" onClick={()=>dispatch(actions.likeBlog(ele))}>
      <FavoriteIcon />
      </IconButton>
      {ele.likes} Likes
      <IconButton aria-label="add to favorites" onClick={()=>dispatch(actions.sideBlog('Edit',ele))}>
      <EditIcon/>
      </IconButton>
      <IconButton aria-label="add to favorites" onClick={()=>dispatch(deleteAction.deleteModal())}>

      <DeleteIcon />
    </IconButton>
  </CardActions>
  {shouldDelete && <DeleteBlog data={ele}/>}
</Card>

        })}
           
        </div>
   
</div>      
    );
}

export default DashBoard