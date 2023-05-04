import React from 'react';
import Caurosel from '../../Caurosel/Caurosel';
import Delicious from '../../Delicious/Delicious';
import Hero from '../../Shared/Hero/Hero';
import Special from '../../Suscribe/Special';
import ChefData from '../Chef/ChefData';

const Home = () => {
    return (
        <>
        <Hero></Hero>
        <Delicious></Delicious>
        <ChefData></ChefData>
        <Caurosel></Caurosel>
        <Special></Special>
        </>
    );
};

export default Home;