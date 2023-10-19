import React from 'react';
import './Main.css';
import cover from '../../assets/images/cover.png';
import Navbar from "./Navbar/Navbar";

const Main = () => {
    return (
        <div id={'main'} className={'Main'}>
            <div className={'Main__upper'}>
                <img src={cover} alt="" />
                <div className={'Main__backdrop'}></div>
            </div>
        </div>
  );
};

export default Main;