import React from 'react';
import './Mission.css';
import missionImage from '../../assets/images/mission.jpg';


const Mission = () => {
    return (
        <div id={'mission'} className={'Mission'}>
            <div className="Mission__img">
                <img src={missionImage} alt=""/>
            </div>
            <div className="Mission__container">
                <div className="Mission__top">
                    <div className="Mission__top--backdrop"></div>
                    <div className="Mission__top--header">
                        <h2>OUR MISSION</h2>
                        <p>Royaa advanced for general contracting</p>
                    </div>
                </div>
                <div className="Mission__bottom">
                    <div className="Mission__bottom--circle Mission__bottom--circle-left"></div>
                    <div className="Mission__bottom--circle Mission__bottom--circle-middle"></div>
                    <div className="Mission__bottom--circle Mission__bottom--circle-right"></div>
                    <div className="Mission__bottom--desc">
                        <p> strive to lead the market by using innovative technologies and <br/> providing the most appropriate Security, Networking & Data Center <br/> solutions to our distinguished clients, carried out by our professional <br/> team, operating with the highest level of technicality, ethics, honesty <br/> and compliance to ensure the satisfaction of our customers and partners</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Mission;