import { Card, CardHeader, Avatar, CardContent, Typography } from '@mui/material';
import { red } from '@mui/material/colors';

function NoDataFound() {
  return (
    <Card sx={{ minWidth: 'xl' }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            No
          </Avatar>
        }
        title={'No Blogs Found'}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          No Blogs Found
        </Typography>
      </CardContent>
    </Card>
  );
}

export default NoDataFound;
