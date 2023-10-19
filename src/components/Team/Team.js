import React from 'react';
import './Team.css';
import sayedImage from '../../assets/images/sayed.jpg';
import mohamedImage from '../../assets/images/mohamed.jpg';
import ahmedImage from '../../assets/images/ahmed.jpg';

const Team = () => {
    return (
        <div id={'team'} className={'Team'}>
            <div className="Team__backdrop">
                <div className="Team__backdrop--left"></div>
                <div className="Team__backdrop--right">
                    <div className="Team__backdrop--gray"></div>
                    <div className="Team__backdrop--purple"></div>
                </div>
            </div>
            <div className="Team__container">
                <div className="Team__header">
                    <h2>SUPER TEAM</h2>
                    <p>THE AVENGERS</p>
                </div>
                <div className="Team__members">
                    <div className="Team__member">
                        <div className="Team__member--avatar">
                            <img src={sayedImage} alt=""/>
                        </div>
                        <div className="Team__member--details">
                            <div className="Team__member--name">
                                <h3>Sayed Mahmoud</h3>
                            </div>
                            <div className="Team__member--position">
                                <p>CEO & CO-Founder</p>
                            </div>
                        </div>
                    </div>
                    <div className="Team__member">
                        <div className="Team__member--avatar">
                            <img src={mohamedImage} alt=""/>
                        </div>
                        <div className="Team__member--details">
                            <div className="Team__member--name">
                                <h3>Mohamed Fathy</h3>
                            </div>
                            <div className="Team__member--position">
                                <p>Projects Development Manager</p>
                            </div>
                        </div>
                    </div>
                    <div className="Team__member">
                        <div className="Team__member--avatar">
                            <img src={ahmedImage} alt=""/>
                        </div>
                        <div className="Team__member--details">
                            <div className="Team__member--name">
                                <h3>Ahmed Saad</h3>
                            </div>
                            <div className="Team__member--position">
                                <p>Projects Manager</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;