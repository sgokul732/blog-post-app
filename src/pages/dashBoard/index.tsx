import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';

import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import './style.css';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from 'react-redux';
import { AppState, BlogType } from './types';
import { Button } from '@mui/material';
import * as actions from './actions';
import DeleteBlog from '../deleteBlog';
import SideBar from '../Sidebar';
import NoDataFound from '../NoDataFound';
import { useState, createContext } from 'react';
import { DeleteContextType } from '../deleteBlog/types';
export const DeleteContext = createContext<DeleteContextType>({
  shouldDelete: false,
  setShouldDelete: (data: boolean) => {
    return data;
  }
});
function DashBoard() {
  const dispatch = useDispatch();
  type ColorCode = Record<string, string>;
  const colorCode: ColorCode = {
    Sports: 'red',
    Cinema: 'blue',
    Politics: 'green'
  };

  const { blogs } = useSelector((state: AppState) => state.blogReducer);
  const [shouldDelete, setShouldDelete] = useState(false);
  return (
    <div className="dashBoard">
      <SideBar />
      <Button
        variant="contained"
        className="addBlog"
        onClick={() => dispatch(actions.sideBlog('Add', null))}>
        + Add Blog
      </Button>
      <div className="blogs">
        {blogs.length > 0 ? (
          blogs.map((ele: BlogType) => {
            const avatar = ele.categories.slice(0, 1).toUpperCase();
            const key = colorCode[ele.categories];
            return (
              <Card sx={{ minWidth: 'xl' }} key={ele.title}>
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: key }} aria-label="recipe">
                      {avatar}
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
                <CardActions>
                  <IconButton
                    aria-label="add to favorites"
                    onClick={() => dispatch(actions.likeBlog(ele))}>
                    <FavoriteIcon />
                  </IconButton>
                  {ele.likes} Likes
                  <IconButton
                    aria-label="add to favorites"
                    onClick={() => dispatch(actions.sideBlog('Edit', ele))}>
                    <EditIcon />
                  </IconButton>
                  <IconButton aria-label="add to favorites" onClick={() => setShouldDelete(true)}>
                    <DeleteIcon />
                  </IconButton>
                </CardActions>
                {shouldDelete && (
                  <DeleteContext.Provider value={{ shouldDelete, setShouldDelete }}>
                    <DeleteBlog data={ele} />
                  </DeleteContext.Provider>
                )}
              </Card>
            );
          })
        ) : (
          <NoDataFound />
        )}
      </div>
    </div>
  );
}

export default DashBoard;
