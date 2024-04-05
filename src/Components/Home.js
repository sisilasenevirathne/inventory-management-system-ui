import React from 'react';

import './Home.css';
import './InventoryTable';
import InventoryParameter from '../Services/InventoryParameter';
import InventoryTable from './InventoryTable';


const Home=()=>{
    return(
<div>
    <p className='title'>Inventory Management Dashboard</p>
    <p className='description'>Inventory of Corels</p>
    <div className='subtitle'> 
    <p>Total Amount of Corels - <InventoryParameter/></p>
    </div>    
    <p className='subtitle'>Corel Details</p>
           
    <InventoryTable/>
      
    

</div>
    );
};

export default Home;