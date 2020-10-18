import React, {useContext} from 'react';
import { FiPower} from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import AuthContext from "../contexts/auth";

import mapMarkerImg from '../images/map-marker.svg';

import '../styles/components/sidebar.css';

export default function Sidebar() {
    const { signed, logout } = useContext(AuthContext);

    return (
        <aside className="app-sidebar">
            <img src={mapMarkerImg} alt="Happy" />

            <footer>
                <button type="button" onClick={logout}>
                    <FiPower size={24} color="#FFF" />
                </button>
            </footer>
        </aside>
    );
}