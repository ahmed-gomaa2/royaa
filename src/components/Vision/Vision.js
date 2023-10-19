import React from 'react';
import './Vision.css';
import visionImage from '../../assets/images/vision.jpg';

const Vision = () => {
    return (
        <div id={'vision'} className={'Vision'}>
            <div className="Vision__left">
                <div className="Vision__left--icon">
                    <div className="Vision__left--icon-big"></div>
                    <div className="Vision__left--icon-small"></div>
                    <div className="Vision__left--icon-i"><i className="fa-solid fa-thumbs-up"></i></div>
                </div>
                <div className="Vision__left--header">
                    <p>Give Perfect<br/>Business Solution</p>
                </div>
                <div className="Vision__left--text">
                    <p>The user can perform the presentation <br/> on a projector or computer, and the powerpoint can be printed <br/> out and made into film.</p>
                </div>
            </div>
            <div className="Vision__right">
                <div className="Vision__right--top">
                    <img src={visionImage} alt=""/>
                </div>
                <div className="Vision__right--bottom">
                    <div className="Vision__right--bottom-header">
                        <p>OUR VISION <br/> THE COMPANY</p>
                    </div>
                    <div className="Vision__right--bottom-text">
                        <p>Royaa aspire to build a better Enviroment <br/> by providing the appropriate technological solutions</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Vision;