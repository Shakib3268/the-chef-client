import React, { useState } from 'react';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Chef from '../SingleChef/Chef';

const ChefData = () => {
    const[chefall,setChef] = useState([])
    useEffect(() =>{
        fetch('https://the-chef-server-drab.vercel.app/chef/0')
        .then(res => res.json())
        .then(data => setChef(data))
        .catch(error => console.log(error))
    },[])
    return (
        <div>
            <Outlet></Outlet>
            
            <h2 className='text-center mt-3 mb-3 text-3xl font-semibold underline text-red-500'>Our Chef</h2>
          <div className='grid lg:grid-cols-2 gap-2'>
          {
            chefall.map(chef => <Chef key={chef.id} chef={chef}></Chef>)
           }
          </div>
        </div>
    );
};

export default ChefData;