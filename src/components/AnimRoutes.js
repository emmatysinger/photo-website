import React from 'react';

import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Work from '../pages/Work';
import WorkPeople from '../pages/WorkPeople';
import WorkTravel from '../pages/WorkTravel';
import WorkOther from '../pages/WorkOther';
import Graduation from '../projects/Graduation';
import Portraits from '../projects/Portraits';
import Italy from '../projects/Italy';
import Como from '../projects/Como';
import Yellowstone from '../projects/Yellowstone';
import Boston from '../projects/Boston';
import NewEngland from '../projects/NewEngland';
import Architecture from '../projects/Architecture';
import Cars from '../projects/Cars';
import Nice from '../projects/Nice';
import CoteDAzur from '../projects/CoteDAzur';
import LowerAlps from '../projects/LowerAlps';
import Alps from '../projects/Alps';
import Interiors from '../projects/Interiors';
import NewYork from '../projects/NewYork';
import Film from '../projects/Film';
import Groups from '../projects/Groups';
import Hawaii from '../projects/Hawaii';

//import routes rouate & uselocation hook
import {Routes, Route, useLocation} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

const AnimRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence initial={true} mode='wait'>
      <Routes key={location.pathname} location={location}>
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/portfolio' element={<Work />} />
        <Route path='/portfolio/travel' element={<WorkTravel />} />
        <Route path='/portfolio/people' element={<WorkPeople />} />
        <Route path='/portfolio/other' element={<WorkOther />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/graduation' element={<Graduation />} />
        <Route path='/portraits' element={<Portraits />} />
        <Route path='/italy' element={<Italy />} />
        <Route path='/como' element={<Como />} />
        <Route path='/yellowstone' element={<Yellowstone />} />
        <Route path='/boston' element={<Boston />} />
        <Route path='/newengland' element={<NewEngland />} />
        <Route path='/architecture' element={<Architecture />} />
        <Route path='/cars' element={<Cars />} />
        <Route path='/nice' element={<Nice />} />
        <Route path='/cotedazur' element={<CoteDAzur />} />
        <Route path='/summeralps' element={<LowerAlps />} />
        <Route path='/newyorkcity' element={<NewYork />} />
        <Route path='/interiors' element={<Interiors />} />
        <Route path='/winteralps' element={<Alps />} />
        <Route path='/film' element={<Film />} />
        <Route path='/groups' element={<Groups />} />
        <Route path='/hawaii' element={<Hawaii />} />
      </Routes>
    </AnimatePresence>
    
  );
};

export default AnimRoutes;
