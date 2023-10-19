import React from 'react';
import './Proffesional.css';
import mainImage from '../../assets/images/professional1.jpg';
import topImage from '../../assets/images/professional2.jpg';
import bottomImage from '../../assets/images/professional3.jpg';

const Proffesional = () => {
    return (
        <div id={'professional'} className={'Proffesional'}>
            <div className="Proffesional__left">
                <div className="Proffesional__left--side"></div>
                <div className="Professional__left--container">
                    <div className="Proffesional__left--opening">
                        <div className="Proffesional__left--header">PROFESSIONAL</div>
                        <div className="Professional__left--text">NETWORKING & SECURITY COMPANY</div>
                        <div className="Professional__left--message">Improve Your Business With Consultants</div>
                    </div>
                    <div className="Professional__left--rates">
                        <div className="Professional__rates--message">Improving Rates</div>
                        <div className="Professional__rates--items">
                            <div className="Professional__rates--item">
                                <div className="Professional__rates--icon-container">
                                    <div className="Professional__rates--percent">12%</div>
                                    <div style={{color: 'purple'}} className="Professional__rates--arrow"><i className="fa-solid fa-up-long"></i></div>
                                </div>
                                <div className="Professional__rates--text">New Clients</div>
                            </div>
                            <div className="Professional__rates--item">
                                <div className="Professional__rates--icon-container">
                                    <div className="Professional__rates--percent">21%</div>
                                    <div style={{color: 'darkred'}} className="Professional__rates--arrow"><i className="fa-solid fa-up-long"></i></div>
                                </div>
                                <div className="Professional__rates--text">New Request</div>
                            </div>
                            <div className="Professional__rates--item">
                                <div className="Professional__rates--icon-container">
                                    <div className="Professional__rates--percent">8%</div>
                                    <div style={{color: 'pink'}} className="Professional__rates--arrow"><i className="fa-solid fa-up-long"></i></div>
                                </div>
                                <div className="Professional__rates--text">R&D</div>
                            </div>
                        </div>
                    </div>
                    <div className="Professional__items">
                        <div className="Professional__item">
                            <div className="Professional__item--icon"><i className="fa-solid fa-hand-holding-dollar"></i></div>
                            <div style={{background: 'purple'}} className="Professional__item--point"></div>
                            <div className="Professional__item--text">Click here to add content of the text，and briefly explain your point of view.</div>
                        </div>
                        <div className="Professional__item">
                            <div className="Professional__item--icon"><i className="fa-solid fa-people-group"></i></div>
                            <div style={{background: 'pink'}}  className="Professional__item--point"></div>
                            <div className="Professional__item--text">Click here to add content of the text，and briefly explain your point of view.</div>
                        </div>
                        <div className="Professional__item">
                            <div className="Professional__item--icon"><i className="fa-solid fa-chart-line"></i></div>
                            <div style={{background: 'black'}}  className="Professional__item--point"></div>
                            <div className="Professional__item--text">Click here to add content of the text，and briefly explain your point of view.</div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="Proffesional__right">
                <div className="Professional__right--bing-small"></div>
                <div className="Professional__right--main">
                    <div className="Professional__right--main-backdrop"></div>
                    <div className="Professional__right--main-text">
                        <div className="Professional__right--main-header">We Help Your Bussiness Better</div>
                        <div className="Professional__right--main-more">Learn More</div>
                    </div>
                    <img src={mainImage} alt=""/>
                </div>
                <div className="Professional__right--top">
                    <img src={topImage} alt=""/>
                </div>
                <div className="Professional__right--bottom-right">
                    <img src={bottomImage} alt=""/>
                </div>
                <div className="Professional__right--bottom-gray"></div>
            </div>
        </div>
    );
};

export default Proffesional;

// orderNameController.text = '${selectedCustomer != null ? '${selectedCustomer!.phone}_${selectedCustomer!.name}' : ''}'
// '${selectedProvider != null ? '-${selectedProvider!.phone}_${selectedProvider!.name}' : ''}'
// '${productNameController.text.isNotEmpty ? '-${productNameController.text}' : ''}'
// '${selectedCustomer != null || selectedProvider != null || productNameController.text.isNotEmpty ? '-' : ''}'
// '${DateTime.now().millisecondsSinceEpoch}';