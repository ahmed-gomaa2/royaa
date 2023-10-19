import React from 'react';
import './Closing.css';
import logo from '../../assets/images/logo.png';

const Closing = () => {
    return (
        <div className={'Closing'}>
            <div className="Closing__backdrop">
                <div className="Closing__backdrop--left"></div>
                <div className="Closing__backdrop--right"></div>
            </div>
            <div className="Closing__sideElem"></div>
            <div className="Closing__container">
                <div className="Closing__logo">
                    <img src={logo} alt=""/>
                </div>
                <div className="Closing__header">
                    <h1>Royaa Contracting</h1>
                    <p>Royaa advanced for general contracting</p>
                </div>
            </div>
        </div>
    );
};

export default Closing;