import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className={'Navbar'}>
            <div className={'Navbar__left'}>
                <ul className={'Navbar__links'}>
                    <li><a className={'Navbar__links--link'} href='#main'>HOME</a></li>
                    <li><a className={'Navbar__links--link'} href='#sections'>CORE BUSINESS</a></li>
                    <li><a className={'Navbar__links--link'} href='#register'>REGISTER</a></li>
                    <li><a className={'Navbar__links--link'} href='#idea'>IDEA</a></li>
                    <li><a className={'Navbar__links--link'} href='#about'>ABOUT</a></li>
                    <li><a className={'Navbar__links--link'} href='#professional'>PROFESSIONAL</a></li>
                    <li><a className={'Navbar__links--link'} href='#vision'>VISION</a></li>
                    <li><a className={'Navbar__links--link'} href='#mission'>MISION</a></li>
                    <li><a className={'Navbar__links--link'} href='#team'>TEAM</a></li>
                    <li><a className={'Navbar__links--link'} href='#services'>SERVICES</a></li>
                    <li><a className={'Navbar__links--link'} href='#portfolio'>PORTFOLIO</a></li>
                    <li><a className={'Navbar__links--link'} href='#partners'>PARTNERS</a></li>
                </ul>
            </div>
            <div className={'Navbar__right'}>
                <ul className={'Navbar__socials'}>
                    <li><a className={'Navbar__socials--link'} href="https://www.facebook.com/profile.php?id=61552687133779 "><i class="fa-brands fa-facebook-f"></i></a></li>
                    <li><a className={'Navbar__socials--link'} href="https://web.whatsapp.com/send?phone=+966568694049&text=message&app_absent=0"><i class="fa-brands fa-whatsapp"></i></a></li>
                </ul>
            </div>
        </div>
  );
};

export default Navbar;