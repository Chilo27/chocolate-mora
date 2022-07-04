import React from 'react'
import itemcount from './itemcount';
 const itemListContainer = ({greeting}) => {
  return <div>
    {greeting}
    <ItemCount stock={5} 
    initial={1} 
    onAdd={() => alert('agregados ${n} productos')}/>
  </div>
  
};

export default itemListContainer;
