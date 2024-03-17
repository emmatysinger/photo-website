import React from 'react';
//import images

import cover4 from '../img/work/cover4.jpg'
import cover11 from '../img/work/cover11.jpg'
import cover12 from '../img/work/cover12.jpg'
import cover15 from '../img/work/cover15.jpg'

//import link
import { Link } from 'react-router-dom';
//import motion
import { motion } from 'framer-motion';
// import transition
import {transition1} from '../transitions';

const WorkOther = () => {
    let data = [
        { id: 1, imgSrc: cover4, coverName: 'Architecture', link:'/architecture'},
        { id: 2, imgSrc: cover12, coverName: 'Interiors', link:'/interiors'},
        { id: 3, imgSrc: cover15, coverName: 'Film', link:'/film'},
        { id: 4, imgSrc: cover11, coverName: 'Cars', link:'/cars'},
        
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
export default WorkOther;

    



{/*<div className='bg-blue-50 flex justify-center items-center overflow-hidden h-full'>
<img className='object-cover'
src={cover6} alt='' />*/}