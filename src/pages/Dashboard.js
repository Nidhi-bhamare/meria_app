import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from '../components/Navbar';
import BlockInfo from './BlockInfo';
import Consumables from './Consumables';
import LiveCamera from './LiveCamera';

const Dashboard = () => {
    return (
        <div className="flex h-screen">
            <Navbar />
            <div className="flex-1 p-8 bg-gray-100">
                <Routes>
                    <Route path="" element={<BlockInfo />} />
                    <Route path="/live-camera" element={<LiveCamera />} /> 
                    <Route path="/consumables" element={<Consumables />} />
                </Routes>
            </div>
        </div>
    );
};

export default Dashboard;
