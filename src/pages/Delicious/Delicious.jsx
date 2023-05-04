import React from 'react';

const Delicious = () => {
    return (
        <div className='mt-8 mb-5'>
            <h2 className='text-3xl text-green-500 underline mb-4 text-center'>Todays Recipe</h2>
            <div className='lg:flex p-5 items-center justify-items-center gap-2'>
            <div className='grow'>
            <img className='img-fluid' src="https://html.webinane.com/mazaa/assets/images/resources/sin-recpie-img.jpg" alt="" srcset="" />
            </div>
            <div>
            <h2 className='text-4xl font-bold'>Chicken Kebabs <br /> with Roasted Red  <br /> Onions.</h2>
            <p className='mt-3'> chicken kebabs with roasted red onions are a popular dish <br /> that many people enjoy. The combination of juicy, <br /> tender chicken with the sweet, caramelized flavor of the roasted red onions can create a delicious <br /> and satisfying meal. Additionally, the kebabs can be seasoned with a variety of herbs and spices to further enhance the flavor profile.</p>
            <button className='btn text-green-500 mt-3'>Learn More</button>
            </div>
            </div>
        </div>
    );
};

export default Delicious;