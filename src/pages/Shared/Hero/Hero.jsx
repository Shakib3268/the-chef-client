import React from 'react';
import image from '../../../assets/vegetables-italian-knife-placed-left-black-table_1220-684.avif'

const Hero = () => {
    return (
        <>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${image})` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold ">Welcome && Enjoy <br /> World Class Cusine</h1>
      <p className="mb-5 text-slate-200"><span>-</span>Familly Dinners,Late nights,Brunches party,Get Together And every meals for the week.</p>
      <button className="btn  bg-orange-600">Contact Us</button>
    </div>
  </div>
</div>
        </>
    );
};

export default Hero;