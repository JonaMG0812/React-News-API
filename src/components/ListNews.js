import React from 'react';
import ANew from './ANew';
import PropTypes from 'prop-types';

const ListNews = ({news}) => (
    <div className='row'>
        {news.map(Mynew => (
            <ANew
                key = {Mynew.url}
                new1 = {Mynew}
            />
        ))}
    </div>
);

ListNews.propTypes = {
    news: PropTypes.array.isRequired
}

export default ListNews;