import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Chef from '../SingleChef/Chef';

const ChefData = () => {
    const[chefall,setChef] = useState([])
    const[seeAll,setSeeAll] = useState(false)
    const product = chefall.slice(0,6)
    useEffect(() =>{
        fetch('https://the-chef-server-drab.vercel.app/chef/0')
        .then(res => res.json())
        .then(data => setChef(data))
        .catch(error => console.log(error))
    },[])
    const handleSeeAll = () =>{
        setSeeAll(!seeAll)
    }
    return (
        <div>
            <Outlet></Outlet>
            
            <h2 className='text-center mt-3 mb-3 text-3xl font-semibold underline text-red-500'>Our Chef</h2>
          <div className={seeAll === true? "hidden" : ""}>
          <div className='grid lg:grid-cols-2 gap-2'>
          {
            product.map(chef => <Chef key={chef.id} chef={chef}></Chef>)
           }
          </div>
          </div>
          <div className={seeAll === false? "hidden" : ""}>
          <div className='grid lg:grid-cols-2 gap-2'>
          {
            chefall.map(chef => <Chef key={chef.id} chef={chef}></Chef>)
           }
          </div>
          </div>
          <Link className={seeAll == true? "hidden": ""}><button  className='btn mt-5 ml-[600px] text-2xl text-green-500' onClick={() => handleSeeAll()}>See All Chef</button></Link>
        </div>
    );
};

export default ChefData;