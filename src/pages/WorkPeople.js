import React from 'react';
//import images

import cover3 from '../img/work/cover3.jpg'
import cover16 from '../img/work/cover16.jpg'
import cover17 from '../img/work/cover17.jpg'

//import link
import { Link } from 'react-router-dom';
//import motion
import { motion } from 'framer-motion';
// import transition
import {transition1} from '../transitions';

const WorkPeople = () => {
    let data = [
        { id: 1, imgSrc: cover3, coverName: 'Graduation', link:'/graduation'},
        { id: 2, imgSrc: cover16, coverName: 'Portraits', link:'/portraits'},
        { id: 3, imgSrc: cover17, coverName: 'Groups', link:'/groups'},
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
export default WorkPeople;

    



{/*<div className='bg-blue-50 flex justify-center items-center overflow-hidden h-full'>
<img className='object-cover'
src={cover6} alt='' />*/}