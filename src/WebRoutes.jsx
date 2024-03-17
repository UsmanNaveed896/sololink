import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from "./pages/homepage/homepage";
import MakeMusicLink from './pages/MakeMusicLink'
import Login from './pages/auth/login'
import SignUp from './pages/auth/signup'
import ForgetPasssword from './pages/auth/forgetPassword'
import Footer from './pages/footer';
const WebRoutes = () => {
    return (
        <>
        <Router>
            <Routes>
                <Route exact path='/' element={<Homepage />} />
                <Route exact path='/makemusiclink' element={<MakeMusicLink />} />
                <Route exact path='/login' element={<Login />} />
                <Route exact path='/signup' element={<SignUp />} />
                <Route exact path='/forgetpassword' element={<ForgetPasssword />} />
            </Routes>
        </Router>
         <Footer/>
         </>
    );
};

export default WebRoutes;
