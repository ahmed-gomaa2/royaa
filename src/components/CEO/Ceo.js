import React from 'react';
import './Ceo.css';
import ceoImage from '../../assets/images/ceo.jpg';

const Ceo = () => {
    return (
        <div className={'Ceo'}>
            <div className="Ceo__backdrop">
                <div className="Ceo__backdrop--left">
                    <div className="Ceo__backdrop--left-purple1"></div>
                    <div className="Ceo__backdrop--left-purple2"></div>
                    <div className="Ceo__backdrop--left-gray"></div>
                </div>
                <div className="Ceo__backdrop--right"></div>
            </div>
            <div className="Ceo__container">
                <div className="Ceo__content">
                    <div className="Ceo__header">
                        <h2>MEET OUR CEO</h2>
                        <p>LEADER COMPANY</p>
                    </div>
                    <div className="Ceo__name">
                        <h4>Eng.Sayed Mahmoud</h4>
                    </div>
                    <div className="Ceo__desc">
                        <p>Good” may be good enough for some. But most of us want more than that. Something inside us makes us want to be better than good. We want to be part of a team whose members, even years later, will be remembered for what they accomplished. We want to go for greatness!
                            At Royaa Contracting, our passion and mission is to provide the best service and products</p>
                        <p>We have been privileged to work with thousands of organizations striving to achieve it. in all that Fields Fire Alarm systems, Fire Fighting systems, Networking, Data Center Systems and CCTV & secuirty systems</p>
                        <p>We see increasing opportunities to contribute to economic growth and social development. Under our philosophy of placing our clients at the heart of everything we do, we aim to establish a dominant position as KSA’s top company in the field</p>
                    </div>
                </div>
                <div className="Ceo__image">
                    <img src={ceoImage} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Ceo;