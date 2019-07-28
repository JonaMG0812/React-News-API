import React from 'react';
import PropTypes from 'prop-types';

const Footer = ({NewsAPI}) => (
    <footer className='page-footer blue-grey darken-3'>
        <div className='footer-copyright'>
            <div className='container'>
                <a className='grey-text text-lighten-4 right' href='https://newsapi.org/' target='_blank' rel="noopener noreferrer">{NewsAPI}</a>
            </div>
        </div>
    </footer>
);

Footer.propTypes = {
    NewsAPI: PropTypes.string.isRequired
}

export default Footer;