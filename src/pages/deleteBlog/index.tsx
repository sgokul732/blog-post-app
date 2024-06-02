import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from './actions';
import { Iprops } from './types';
import { Button } from '@mui/material';
import './style.css';
import { deleteBlog } from '../dashBoard/actions';
import { AppState } from '../dashBoard/types';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3
};

export function DeleteBlog(props: Iprops) {
  const { shouldDelete } = useSelector((state: AppState) => state.deleteReducer);
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(actions.deleteModal());
    dispatch(deleteBlog(props.data));
  };

  return (
    <Modal
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
      open={shouldDelete}
      onClose={handleClose}
    >
      <Fade in={shouldDelete}>
        <Box sx={style}>
          <Typography id="transition-modal-title" variant="h6" component="h2">
            Delete Blog
          </Typography>
          <Typography component={'span'} id="transition-modal-description" sx={{ mt: 2 }}>
            <p>Are you sure you want to delete the following blog?</p>
            <p>Title : {props.data.title}</p>
            <p>Category : {props.data.categories}</p>
            <p>Description : {props.data.description}</p>
          </Typography>
          <div className="deleteBtn">
            <Button variant="contained" onClick={() => handleClose()}>
              Delete
            </Button>
          </div>
        </Box>
      </Fade>
    </Modal>
  );
}

export default DeleteBlog;
