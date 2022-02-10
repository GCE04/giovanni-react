import {useLocation} from "react-router-dom";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import image from '../assets/images/selfie.jpg'

export default function PostScreen() {

    let location = useLocation();
    console.log({location})

    return (
      <div style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>
      <Card sx={{ minWidth: 275, maxWidth: 120, backgroundColor: '#1976d2'}}>
        <CardContent>
          <Typography sx={{ fontSize: 20, fontWeight: 'bold', color: '#ffffff'}} variant="h5" component="div">
            {location.state.post.name}
          </Typography>
          <br></br>
          <CardMedia
            component="img"
            height="195"
            image={image}
            alt="Test img"
          />
          <br></br>
          <Typography sx={{ fontSize: 14, color: '#ffffff' }} variant="body2">
            {location.state.content}
          </Typography>
        </CardContent>
      </Card>
      </div>
    );
}
