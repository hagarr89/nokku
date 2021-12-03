import './App.css';
import React from "react";
import { Routes, Route} from 'react-router-dom';
import Home from './home';
import Campaigns from './campaignsPage';
// import {useDispatch, useSelector} from "react-redux";
import Header from "./components/header";

const App = () => {
    return (
        <div className="App">
            <Header></Header>
            <div className="App-body">
                <Routes>
                    <Route path='/'  element={<Home />} />
                    <Route path='/campaigns' element={<Campaigns/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
