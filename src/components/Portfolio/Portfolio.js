import React from 'react';
import './Portfolio.css';
import project1Image from '../../assets/images/project1.jpg';
import project2Image from '../../assets/images/project2.jpg';
import project3Image from '../../assets/images/project3.jpg';
import project4Image from '../../assets/images/project4.jpg';
import project5Image from '../../assets/images/project5.jpg';

const Portfolio = () => {
    return (
        <div id={'portfolio'} className={'Portfolio'}>
            <div className="Portfolio__backdrop">
                <div className="Portfolio__backdrop--left"></div>
                <div className="Portfolio__backdrop--right">
                    <div className="Portfolio__backdrop--right-small"></div>
                    <div className="Portfolio__backdrop--right-big"></div>
                    <div className="Portfolio__backdrop--right-gray"></div>
                    <div className="Portfolio__backdrop--right-sideElem"></div>
                </div>
            </div>
            <div className="Portfolio__container">
                <div className="Portfolio__header">
                    <h2>PORTFOLIO</h2>
                    <p>OUR LATEST PROJECT</p>
                </div>
                <div className="Portfolio__projects">
                    <div className="Portfolio__projects--item1"><img src={project1Image} alt=""/></div>
                    <div className="Portfolio__projects--item2"><img src={project2Image} alt=""/></div>
                    <div className="Portfolio__projects--item3"><img src={project3Image} alt=""/></div>
                    <div className="Portfolio__projects--item4"><img src={project4Image} alt=""/></div>
                    <div className="Portfolio__projects--item5"><img src={project5Image} alt=""/></div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;