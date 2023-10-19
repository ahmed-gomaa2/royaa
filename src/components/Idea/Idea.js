import React from 'react';
import "./Idea.css";
import ideaImage from '../../assets/images/idea.jpg';

const Idea = () => {
    return (
        <div id={'idea'} className={'Idea'}>
            <img src={ideaImage} alt=""/>
            <div className="Idea__details">
                <div className="Idea__details--left">
                    <div className="Idea__details--features">
                        <div className="Idea__details--icon"><i className="fa-solid fa-trophy"></i></div>
                        <div className="Idea__details--desc">
                            <div className="Idea__details--desc-header">TOP #1 IT Partners</div>
                            <div className="Idea__details--desc-text">
                                <p>WE Have Partnerships with the 1st Products Manufacturers Globaly .
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="Idea__details--features">
                        <div className="Idea__details--icon"><i className="fa-regular fa-gem"></i></div>
                        <div className="Idea__details--desc">
                            <div className="Idea__details--desc-header">TOP #1 IT Partners</div>
                            <div className="Idea__details--desc-text">
                                <p>WE Have Partnerships with the 1st Products Manufacturers Globaly .
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Idea__details--right">
                    <div className="Idea__details--right-square-smale"></div>
                    <div className="Idea__details--right-square-big"></div>
                    <div className="Idea__details--right-header">
                        <h4>WELCOME TO OUR</h4>
                    </div>
                    <p className={'Idea__details--right-text'}>Creative Idea For <br/> Running Business <br/> Process</p>
                </div>
            </div>
        </div>
    );
};

export default Idea;