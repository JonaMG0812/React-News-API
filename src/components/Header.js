import React from 'react';
import logo from '../logo.svg'
import PropTypes from 'prop-types';

const Header = ({title}) => (
    <nav className='nav-wrapper blue-grey darken-3'>
        <a href='#!' className='logo brand-logo center'>
            <img src={logo} className="App-logo" alt="logo" />
            {title}
        </a>
    </nav>
);

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header;