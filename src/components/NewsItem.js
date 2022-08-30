import React from 'react';
import'./newsitem.css';

const NewsItem = (props) => {
    const { title, description, publishedAt, url, imgurl } = props;

    return(
        <div>
        <div className='news-container'>
            <div className='news-content'>
                <img src={imgurl} alt={imgurl} />
                <p><a href={url}>{title}</a></p>
                <p>{description}</p>
                <p>{publishedAt}</p>
            </div>
        </div>
    </div>
    );
};

export default NewsItem;
