import React from 'react';
//import images

import cover1 from '../img/work/cover1.jpg'
import cover2 from '../img/work/cover2.jpg'
import cover5 from '../img/work/cover5.jpg'
import cover6 from '../img/work/cover6.jpg'
import cover7 from '../img/work/cover7.jpg'
import cover8 from '../img/work/cover8.jpg'
import cover9 from '../img/work/cover9.jpg'
import cover10 from '../img/work/cover10.jpg'
import cover13 from '../img/work/cover13.jpg'
import cover14 from '../img/work/cover14.jpg'
import cover18 from '../img/work/cover18.jpg'

//import link
import { Link } from 'react-router-dom';
//import motion
import { motion } from 'framer-motion';
// import transition
import {transition1} from '../transitions';

const WorkTravel = () => {
    let data = [
        { id: 1, imgSrc: cover8, coverName: "Côte D'Azur", link:'/cotedazur'},
        { id: 2, imgSrc: cover14, coverName: 'Winter Alps', link:'/winteralps'},
        { id: 3, imgSrc: cover9, coverName: 'Nice', link:'/nice'},
        { id: 4, imgSrc: cover5, coverName: 'Lake Como', link:'/como'},
        { id: 5, imgSrc: cover1, coverName: 'Boston', link:'/boston'},
        { id: 6, imgSrc: cover13, coverName: 'New York City', link:'/newyorkcity'},
        { id: 7, imgSrc: cover2, coverName: 'Yellowstone', link:'/yellowstone'},
        { id: 8, imgSrc: cover10, coverName: 'Summer Alps', link:'/summeralps'},
        { id: 9, imgSrc: cover6, coverName: 'New England', link:'/newengland'},
        { id: 10, imgSrc: cover7, coverName: 'Italy', link:'/italy'},
        { id: 11, imgSrc: cover18, coverName: 'Hawaii', link:'/hawaii'},
    ];

    return (
        <motion.section 
            initial={{ opacity:0 }} 
            animate={{ opacity:1 }} 
            exit={{ opacity:0 }}
            transition={transition1}
            className='section overflow-scroll'>
            <div className='items-center px-16 h-full pt-[100px] lg:pt-[140px] relative'>
                {/* image grid */}
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[4%] aspect-cover'>
                    {data.map((item, index) => {
                        return(
                            <motion.div 
                                initial={{ scale:0.8 }} 
                                animate={{ scale:1 }} 
                                exit={{ opacity:0 }}
                                transition={transition1}
                                className="group justify-center items-center w-full h-full relative">
                                <img className="object-cover h-full w-full" src={item.imgSrc} alt='' />
                                <Link className='cover' to={item.link}>
                                    <p>{item.coverName}</p>
                                </Link>
                            </motion.div>    
                        )
                    })}

                </div>
                <div className="grid-spacer"></div>
            </div>
        </motion.section>
    );
};
export default WorkTravel;

    



{/*<div className='bg-blue-50 flex justify-center items-center overflow-hidden h-full'>
<img className='object-cover'
src={cover6} alt='' />*/}