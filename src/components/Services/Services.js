import React from 'react';
import './Services.css';
import service1Image from '../../assets/images/services1.png';
import service2Image from '../../assets/images/service2.png';
import service3Image from '../../assets/images/service3.png';
import service4Image from '../../assets/images/service4.png';
import service5Image from '../../assets/images/service5.png';
import service6Image from '../../assets/images/service6.png';

const Services = () => {
    return (
        <div id={'services'} className={'Services'}>
            <div className="Services__sideElem"></div>
            <div className="Services__container">
                <div className="Services__header">
                    <h1>OUR SERVICES</h1>
                    <p>ABOUT OUR SERVICES</p>
                </div>
                <div className="Services__content">
                    <div className="Services__left">
                        <div className="Services__left--items">
                            <div className="Services__left--item">
                                <div className="Services__left--item-header">
                                    <h3>Data Center</h3>
                                </div>
                                <div className="Services__left--item-text">
                                    Full Data Center Solutions (Turn Key) Solution From Scratch, Building Data Center With High AVailability.

                                </div>
                            </div>
                            <div className="Services__left--item">
                                <div className="Services__left--item-header">
                                    <h3>Data Center</h3>
                                </div>
                                <div className="Services__left--item-text">
                                    Full Data Center Solutions (Turn Key) Solution From Scratch, Building Data Center With High AVailability.

                                </div>
                            </div>
                            <div className="Services__left--item">
                                <div className="Services__left--item-header">
                                    <h3>Data Center</h3>
                                </div>
                                <div className="Services__left--item-text">
                                    Full Data Center Solutions (Turn Key) Solution From Scratch, Building Data Center With High AVailability.

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="Services__middle">
                        <div className="Services__middle--items">
                            <div className="Services__middle--item">
                                <div className="Services__middle--item-backdrop"></div>
                                <img src={service1Image} alt=""/>
                            </div>
                            <div className="Services__middle--item">
                                <div className="Services__middle--item-backdrop"></div>
                                <img src={service2Image} alt=""/>
                            </div>
                            <div className="Services__middle--item">
                                <div className="Services__middle--item-backdrop"></div>
                                <img src={service3Image} alt=""/>
                            </div>
                            <div className="Services__middle--item">
                                <div className="Services__middle--item-backdrop"></div>
                                <img src={service4Image} alt=""/>
                            </div>
                            <div className="Services__middle--item">
                                <div className="Services__middle--item-backdrop"></div>
                                <img src={service5Image} alt=""/>
                            </div>
                            <div className="Services__middle--item">
                                <div className="Services__middle--item-backdrop"></div>
                                <img src={service6Image} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="Services__right">
                        <div className="Services__right--items">
                            <div className="Services__right--item">
                                <div className="Services__right--header">
                                    <h3>Survillance</h3>
                                </div>
                                <div className="Services__right--item-text">
                                    <p>Building Full Survillance Solution With High availability and Power Monitoring & Integration With Parties</p>
                                </div>
                            </div>
                            <div className="Services__right--item">
                                <div className="Services__right--header">
                                    <h3>Survillance</h3>
                                </div>
                                <div className="Services__right--item-text">
                                    <p>Building Full Survillance Solution With High availability and Power Monitoring & Integration With Parties</p>
                                </div>
                            </div>
                            <div className="Services__right--item">
                                <div className="Services__right--header">
                                    <h3>Survillance</h3>
                                </div>
                                <div className="Services__right--item-text">
                                    <p>Building Full Survillance Solution With High availability and Power Monitoring & Integration With Parties</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;