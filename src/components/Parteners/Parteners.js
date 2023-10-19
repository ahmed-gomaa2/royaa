import React from 'react';
import './Parteners.css';
import cisicoImage from '../../assets/images/cisco.png';
import dellImage from '../../assets/images/dell.png';
import cotecImage from '../../assets/images/cotec.png';
import datwylerImage from '../../assets/images/datwyler.png';
import commsImage from '../../assets/images/commscope.png';
import premiumImage from '../../assets/images/premium.png';
import threeMImage from '../../assets/images/3m.png';
import cdviImage from '../../assets/images/cdvi.png';

const Parteners = () => {
    return (
        <div id={'partners'} className={'Partners'}>
            <div className="Partners__sideElem"></div>
            <div className="Partners__container">
                <div className="Partners__header">Partners</div>
                <div className="Partners__items">
                    <div className="Partners__item">
                        <div className="Partners__item--img">
                            <img src={cisicoImage} alt=""/>
                        </div>
                    </div>
                    <div className="Partners__item">
                        <div className="Partners__item--img">
                            <img src={dellImage} alt=""/>
                        </div>
                    </div>
                    <div className="Partners__item">
                        <div className="Partners__item--img">
                            <img src={cotecImage} alt=""/>
                        </div>
                    </div>
                    <div className="Partners__item">
                        <div className="Partners__item--img">
                            <img src={datwylerImage} alt=""/>
                        </div>
                    </div>
                    <div className="Partners__item">
                        <div className="Partners__item--img">
                            <img src={commsImage} alt=""/>
                        </div>
                    </div>
                    <div className="Partners__item">
                        <div className="Partners__item--img">
                            <img src={premiumImage} alt=""/>
                        </div>
                    </div>
                    <div className="Partners__item">
                        <div className="Partners__item--img">
                            <img src={threeMImage} alt=""/>
                        </div>
                    </div>
                    <div className="Partners__item">
                        <div className="Partners__item--img">
                            <img src={cdviImage} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Parteners;