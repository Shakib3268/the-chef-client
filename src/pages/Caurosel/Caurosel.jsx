import React from 'react';

const Caurosel = () => {
    return (
        <div>
            <h2 className='text-center text-2xl text-red-600 underline mt-8 mb-8 font-bold'>Top Location Sale</h2>
            <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/g6NttXs/china-arch-1127-3673.jpg" className="w-full img-fluid" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/q9WLdj7/day-city-view-1417-1826.jpg" className="w-full img-fluid" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/4jPLtdh/scene-outside-fuzimiao-temple-1359-243.jpg" className="w-full img-fluid" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/44BvYVN/sanfeng-temple-181624-37831.jpg" className="w-full img-fluid" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
        </div>
    );
};

export default Caurosel;