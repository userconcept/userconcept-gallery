import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from './hooks/useTypedSelector';
import { auth } from './actions/user';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

import Home from './pages/Home';
import Registration from './pages/Registration';
import Login from './pages/Login';
import Photos from './pages/Photos';
import Users from './pages/Users';
import Disk from './pages/Disk';
import Contact from './pages/Contact';

import Header from './components/Header';
import Main from './components/Main';

const AppWrapper = styled.div`
    width: 100%;
    height: 100%;
    padding-top: 8rem;
    background-color: white;
`;

const App: React.FC = () => {
    const isAuth = useTypedSelector((state) => state.user.isAuth);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(auth());
    }, []);

    return (
        <AppWrapper>
            <Header />
            <Main>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="/registration" element={<Registration />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/photos" element={<Photos />} />
                    <Route path="/users" element={<Users />} />
                    {isAuth ? (
                        <Route path="/disk" element={<Disk />} />
                    ) : (
                        <Route path="/disk" element={<Login />} />
                    )}
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </Main>
        </AppWrapper>
    );
};

export default App;
