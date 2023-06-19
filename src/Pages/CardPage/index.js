import React, { useEffect, useState } from 'react';
import CardView from '../../Views/CardView/CardView';

const CardPage = ({data}) => {

  
  return (
    <div>
      <CardView data={data}/>
    </div>
  );
};

export default CardPage;