import React from 'react';
import './Home.css';
import Main from "../../components/Main/Main";
import Navbar from "../../components/Main/Navbar/Navbar";
import Sections from "../../components/Sections/Sections";
import Register from "../../components/Register/Register";
import Idea from "../../components/Idea/Idea";
import About from "../../components/About/About";
import Proffesional from "../../components/Proffesional/Proffesional";
import Vision from "../../components/Vision/Vision";
import Mission from "../../components/Mission/Mission";
import Team from "../../components/Team/Team";
import CEO from "../../components/CEO/Ceo.js";
import Services from "../../components/Services/Services";
import Portfolio from "../../components/Portfolio/Portfolio";
import Parteners from "../../components/Parteners/Parteners";
import Closing from "../../components/Closing/Closing";

const Home = () => {
    return (
        <div className={'Home'}>
            <Main />
            <Navbar />
            <Sections />
            <Register />
            <Idea />
            <About />
            <Proffesional />
            <Vision />
            <Mission />
            <Team />
            <CEO />
            <Services />
            <Portfolio />
            <Parteners/>
            <Closing />
        </div>
  );
};

export default Home;