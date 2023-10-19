import React from 'react';
import './Register.css';
import registerImage from '../../assets/images/register.jpg';
const Register = () => {
    return (
        <div id={'register'} className={'Register'}>
            <div className="Register__left">
                <div className="Register__shape--gray"></div>
                <div className="Register__shape--purple"></div>
                <div className="Register__shape--purple-big"></div>
                <div className="Register__desc">
                    <div className="Register__header">register now</div>
                    <div className="Register__desc--text">Network Solutions, Security Systems
                        Access Control, Survillance
                        SMATV, IP-PBX
                        Data Center
                    </div>
                    <div className="Register__desc--quote-left"><i className="fa-solid fa-quote-left"></i></div>
                    <div className="Register__desc--quote-right"><i className="fa-solid fa-quote-left"></i></div>
                </div>
            </div>
            <div className="Register__right">
                <img src={registerImage} alt=""/>
            </div>
        </div>
    );
};

export default Register;