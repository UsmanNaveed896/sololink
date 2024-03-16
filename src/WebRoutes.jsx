import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from "./pages/homepage/homepage";
import MakeMusicLink from './pages/MakeMusicLink'

const WebRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route exact path='/' element={<Homepage />} />
                <Route exact path='/makemusiclink' element={<MakeMusicLink />} />
            </Routes>
        </Router>
    );
};

export default WebRoutes;
