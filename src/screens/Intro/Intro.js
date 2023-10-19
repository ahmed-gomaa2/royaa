import React from 'react';
import './Intro.css';
import background from '../../assets/images/intro.jpg';
import logo from '../../assets/images/logo.png';

const Intro = () => {
    return (
        <div className={'Intro'}>
            <div className={'Intro__container'}>
                <div className={'Intro__greetings'}>
                    <p>welcome to</p>
                </div>
                <div className={'Intro__banar'}>
                    <div className={'Intro__logo'}>
                        <img src={logo} alt="" />
                    </div>
                    <div className={'Intro__desc'}>
                        <div className={'Intro__header'}>
                            <h3>Royaa Contracting</h3>
                        </div>
                        <div className={'Intro__text'}>
                            Simple Solution for Complex Communication
                        </div>
                    </div>
                </div>   
            </div>
            <div className={'Intro__background'}>
                <img className={'Intro__background--img'} src={background} alt="" />
            </div>
            <div className={'Intro__backdrop'}></div>
        </div>
  );
};

export default Intro;