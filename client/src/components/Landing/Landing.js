import React from 'react';
import HeroSection from './HeroSection/HeroSection';
import {
    homeObjHero, homeObjDoctor, homeObjImage, homeObjAudio, homeObjVideo, homeObjCamera, homeObjUpload
} from './Data/Data';
import Footer from './Footer/Footer';
import classes from './Landing.module.css';

const landing = props => (
    <div className={classes.Landing} >
        <HeroSection {...homeObjHero} />
        <HeroSection {...homeObjDoctor} />
        <HeroSection {...homeObjImage} />
        <HeroSection {...homeObjAudio} />
        <HeroSection {...homeObjVideo} />
        <HeroSection {...homeObjCamera} />
        <HeroSection {...homeObjUpload} />
        <Footer />
    </div>
);

export default landing;