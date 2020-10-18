import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import '../styles/pages/landing.css';

import logoImg from '../images/logo.svg';

function Landing() {
    return (
        <div id="page-landing">
            <div className="content-wrapper">
                <div className="info">
                    <img src={logoImg} alt="Happy" />
                    <div className="location">
                        <strong>São José do Rio Pardo</strong>
                        <span>São Paulo</span>
                    </div>
                </div>

                <main>
                    <h1>Leve felicidade para o mundo</h1>
                    <p>Visite orfanatos e mudo o dia de muitas crianças.</p>
                </main>

                <Link to="/restrict-area" className="login">
                    Acesso restrito
                </Link>

                <Link to="/app" className="enter-app">
                    <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
                </Link>
            </div>
        </div>
    );
}

export default Landing;