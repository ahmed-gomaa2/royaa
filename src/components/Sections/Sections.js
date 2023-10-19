import React from 'react';
import './Sections.css';

const Sections = () => {
    return (
        <div id={'sections'} className={'Sections'}>
            <div className={'Sections__upper'}></div>
            <div className={'Sections__bottom'}></div>
            <div className={'Sections__container'}>
                <div className={'Sections__section'}>
                    <div className={'Sections__section--header'}>
                        <h5>Portfolio</h5>
                    </div>
                    <div className={'Sections__section--icon'}>
                        <i className="fa-solid fa-magnifying-glass-plus"></i>
                    </div>
                    <div className={'Sections__section--desc'}>
                        <p>Find Here Our Services for Your Company</p>
                    </div>
                </div>
                <div className={'Sections__section'}>
                    <div className={'Sections__section--header'}>
                        <h5>Our Market Place</h5>
                    </div>
                    <div className={'Sections__section--icon'}>
                        <i className="fa-solid fa-shop-lock"></i>
                    </div>
                    <div className={'Sections__section--desc'}>
                        <p>Select from Large Store and Get Your Quote Now </p>
                    </div>
                </div>
                <div className={'Sections__section'}>
                    <div className={'Sections__section--header'}>
                        <h5>CORE BUSINESS</h5>
                    </div>
                    <div className={'Sections__section--icon'}>
                        <i className="fa-solid fa-bullhorn"></i>
                    </div>
                    <div className={'Sections__section--desc'}>
                        <p>Learn About Our Core Business and Meet Our Consultants.</p>
                    </div>
                </div>
            </div>
        </div>
  );
};

export default Sections;