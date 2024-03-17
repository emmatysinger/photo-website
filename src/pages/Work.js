import React from 'react';
//import images

import cover1 from '../img/work/cover1.jpg'
import cover2 from '../img/work/cover2.jpg'
import cover3 from '../img/work/cover3.jpg'
import cover4 from '../img/work/cover4.jpg'
import cover5 from '../img/work/cover5.jpg'
import cover6 from '../img/work/cover6.jpg'
import cover7 from '../img/work/cover7.jpg'
import cover8 from '../img/work/cover8.jpg'
import cover9 from '../img/work/cover9.jpg'
import cover10 from '../img/work/cover10.jpg'
import cover11 from '../img/work/cover11.jpg'
import cover12 from '../img/work/cover12.jpg'
import cover13 from '../img/work/cover13.jpg'
import cover14 from '../img/work/cover14.jpg'
import cover15 from '../img/work/cover15.jpg'
import cover16 from '../img/work/cover16.jpg'
import cover17 from '../img/work/cover17.jpg'
import cover18 from '../img/work/cover18.jpg'

//import link
import { Link } from 'react-router-dom';
//import motion
import { motion } from 'framer-motion';
// import transition
import {transition1} from '../transitions';

const Work = () => {
    let data = [
        { id: 1, imgSrc: cover8, coverName: "Côte D'Azur", link:'/cotedazur'},
        { id: 2, imgSrc: cover14, coverName: 'Winter Alps', link:'/winteralps'},
        { id: 3, imgSrc: cover9, coverName: 'Nice', link:'/nice'},
        { id: 4, imgSrc: cover5, coverName: 'Lake Como', link:'/como'},
        { id: 5, imgSrc: cover1, coverName: 'Boston', link:'/boston'},
        { id: 6, imgSrc: cover13, coverName: 'New York City', link:'/newyorkcity'},
        { id: 7, imgSrc: cover2, coverName: 'Yellowstone', link:'/yellowstone'},
        { id: 8, imgSrc: cover10, coverName: 'Summer Alps', link:'/summeralps'},
        { id: 9, imgSrc: cover16, coverName: 'Portraits', link:'/portraits'},
        { id: 10, imgSrc: cover6, coverName: 'New England', link:'/newengland'},
        { id: 11, imgSrc: cover7, coverName: 'Italy', link:'/italy'},
        { id: 12, imgSrc: cover18, coverName: 'Hawaii', link:'/hawaii'},
        { id: 13, imgSrc: cover4, coverName: 'Architecture', link:'/architecture'},
        { id: 14, imgSrc: cover3, coverName: 'Graduation', link:'/graduation'},
        { id: 15, imgSrc: cover12, coverName: 'Interiors', link:'/interiors'},
        { id: 16, imgSrc: cover15, coverName: 'Film', link:'/film'},
        { id: 17, imgSrc: cover11, coverName: 'Cars', link:'/cars'},
        { id: 18, imgSrc: cover17, coverName: 'Groups', link:'/groups'},
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
            </div>
        </motion.section>
    );
};
export default Work;

    



{/*<div className='bg-blue-50 flex justify-center items-center overflow-hidden h-full'>
<img className='object-cover'
src={cover6} alt='' />*/}