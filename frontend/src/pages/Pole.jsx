import React from 'react';
import { useParams } from 'react-router-dom';


function Pole() {
  const { id } = useParams();


  return(
    <>
    {id}
    </>
  )
}

export default Pole;
