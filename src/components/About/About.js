import React from 'react';
import './About.css';
import aboutImage from '../../assets/images/about.png';

const features = [80, 95, 75];

const About = () => {
    return (
        <div id={'about'} className={'About'}>
            <div className="About__left">
                <img src={aboutImage} alt="" className="About__image" />
                <div className="About__backdrop"></div>
                <div className="About__lef--content">
                    <div className="About__left--badge">
                        <div className="About__badge--circle-big"></div>
                        <div className="About__badge--circle-small"></div>
                        <div className="About__badge--icon"><i className="fa-solid fa-ribbon"></i></div>
                    </div>
                    <div className="About__left--desc">
                        <div className="About__left--header">We Help Your <br/> Bussiness Better</div>
                        <div className="About__left--desc-text">
                            <p>Implmenting New Technologies, Upgrade Your <br/> Solutions, Desig & Planning Resources with Our <br/> High Efficent Temas.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="About__right">
                <div className="About__right--purple-small"></div>
                <div className="About__right--purple-big"></div>
                <div className="About__right--gray"></div>
                <div className="About__right--content">
                    <div className="About__right--header">
                        <div className="About__right--header-big">ABOUT</div>
                        <div className="About__right--header-small">THE COMPANY</div>
                    </div>
                    <div className="About__right--desc">
                        <p className="About__right--desc-text">
                            Royaa is one of leading information technology and low current solution provider
                            serving cutting-edge class business consulting services. Its leveraging functional
                            expertise, best practices coupled to the exceptional delivery model is ideal to support
                            companies to achieve their business goals and transformed objectives.
                        </p>
                    </div>
                    <div className="About__right--features">
                        <div className="About__right--feature">
                            <div className="About__right--feature-rate">{features[0]}%</div>
                            <div className="About__right--feature-label"><p>Improvement</p></div>
                            <div className="About__right--feature-bar">
                                <div style={{width: `${features[0]}%`}} className="About__right--feature-color"></div>
                                <div className="About__right--feature-container"></div>
                            </div>
                        </div>
                        <div className="About__right--feature">
                            <div className="About__right--feature-rate">{features[1]}%</div>
                            <div className="About__right--feature-label"><p>Fast Responding</p></div>
                            <div className="About__right--feature-bar">
                                <div style={{width: `${features[1]}%`}} className="About__right--feature-color"></div>
                                <div className="About__right--feature-container"></div>
                            </div>
                        </div>
                        <div className="About__right--feature">
                            <div className="About__right--feature-rate">{features[2]}%</div>
                            <div className="About__right--feature-label"><p>New Updates</p></div>
                            <div className="About__right--feature-bar">
                                <div style={{width: `${features[2]}%`}} className="About__right--feature-color"></div>
                                <div className="About__right--feature-container"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;