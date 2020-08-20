import React from 'react'
import './Header.css';
import Logo from '../../Image/logo.png';

function Header() {
    return (
        <div className="header">
            <img className="logo-image" src={Logo} alt="Pokam"/>

            <div className="header_search">
                <input type="text" placeholder="search your tour" className="header__input"/>
                <button className="search_icon">W</button>
            </div>
        </div>
    )
}

export default Header
