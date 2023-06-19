import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { Badge, Paper } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const CardDetailsView = () => {
  return (
    <Card sx={{ display: 'flex', flexDirection: 'rows' }}>
      <CardMedia
        component="img"
        sx={{ width: '20%' ,padding: "1rem"}}
        image="https://cdn-dior.manager.tv/files/IMAGE_BOXES.jpg" // Replace with your image URL
        alt="Card Image"
      />
      <CardContent sx={{ pl: 0, pb: 1 }}>
      <Grid container flexDirection={"rows"} alignContent={"flex-start"}>
        <Grid  rowSpacing={1} justifyContent={"flex-start"} item >
            <Typography align='left' marginRight={"35px"} gutterBottom variant="subtitle1" component="div" >
                <b>CARLA SELCTION</b>
              </Typography>
        </Grid>
        <Grid item justifyContent={"flex-end"}>
        <Badge
      badgeContent="Status"
      variant="dot"
      style={{
        fontSize:"10px",
        backgroundColor: 'red', // Replace with your desired color
        color: '#ffffff', // Replace with your desired text color
        padding: '0.3rem',
        borderRadius: '0.25rem',
      }}
    >
DECLINED    </Badge>
        </Grid>
        
        <Grid item  justifyContent={"flex-start"}>
        <Typography variant="body2" color="text.secondary">
        6200 ¥ | 14/12/2023 9:41
        </Typography>
        </Grid>

        <Grid item xs={12}>
        <Typography align='left' variant="subtitle1" component="div">
            Xavier Durand              
        </Typography>
        </Grid>
      </Grid>
         
      </CardContent>
      
    </Card>
  );
};

export default CardDetailsView;
