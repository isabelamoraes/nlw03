import React, { ChangeEvent, FormEvent, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import AuthContext from "../contexts/auth";

import logo from '../images/logotipo.svg';

import '../styles/pages/login.css';

function Login() {
    const { signed, auth } = useContext(AuthContext);

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    function handleSubmit(event: FormEvent) {
        event.preventDefault();

        const data = new FormData();

        data.append('email', email);
        data.append('senha', senha);

        auth();
    }

    return (
        <div id="page-login">
            <main>
                <img src={logo} alt="Happy" />
                <strong>São José do Rio Pardo</strong>
                <span>São Paulo</span>
            </main>

            <aside>
                <form onSubmit={handleSubmit} className="login-form">
                    <fieldset>
                        <legend>Fazer Login</legend>
                        <div className="input-block">
                            <label htmlFor="email">E-mail</label>
                            <input
                                id="email"
                                value={senha}
                                onChange={event => setEmail(event.target.value)}
                            />
                            <label htmlFor="senha">Senha</label>
                            <input
                                id="senha"
                                type="password"
                                value={senha}
                                onChange={event => setSenha(event.target.value)}
                            />
                        </div>
                    </fieldset>

                    <button className="confirm-button" type="submit">
                        Entrar
                    </button>
                </form>
            </aside>

            <Link to="/" className="goBack">
                <FiArrowLeft size="24" color="#15C3D6" />
            </Link>
        </div>
    );
}

export default Login;