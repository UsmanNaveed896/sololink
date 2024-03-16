import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from "./pages/homepage/homepage";

const WebRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route exact path='/' element={<Homepage />} />
            </Routes>
        </Router>
    );
};

export default WebRoutes;
