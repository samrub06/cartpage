import React from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';

const CardView = ({data}) => {

    const formatDate = (dateString) => {
        const options = { day: 'numeric', month: 'long', hour: '2-digit', minute: '2-digit' };
        const date = new Date(dateString);
        return date.toLocaleDateString('fr-FR', options);
      };
      const date= data?.createdDate

      const currentDate = formatDate(date);

console.log("data",data)
/* const cardData={}
  const getTotalPrice = () => {
    return cardData?.reduce((total, card) => total + card.price, 0);
  };
 */
  const handleGoBack = () => {
    // Handle the logic for going back to the previous page
  };

  
  return (
    <div>
 <AppBar position="static" color='default'>
      <Toolbar>
        <IconButton edge="start" color="inherit" onClick={handleGoBack}>
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        {currentDate}       </Typography>
      </Toolbar>
    </AppBar>
      <div>
        {data?.items.map((card) => (
          <Card key={card.id} sx={{ marginBottom: '1rem' }}>
            <CardContent>
              <Typography variant="h5" component="div">
                {card?.title}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Price: ${card?.price} ${data?.currency}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Price: ${card?.name}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>

      <div>
        <Typography variant="h3">Total: {/* ${getTotalPrice()} */}</Typography>
      </div>
    </div>
  );
};

export default CardView;
