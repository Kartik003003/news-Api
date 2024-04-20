import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NewsArticle from './NewsArticle';

const News = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        axios
            .get('https://newsapi.org/v2/everything?q=Apple&sortBy=popularity&apiKey=ad5695bb53e04c93888ce110fe1e0f3a')
            .then(response => {
                setArticles(response.data.articles);
                console.log(response.data.articles);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    const filteredArticles = articles.filter(
        (article) =>
            !article.title.includes('[Removed]') && !article.description.includes('[Removed]')
    );

    return (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem', marginTop: '6rem' }}>
            {filteredArticles.map((article, index) => (
                <NewsArticle
                    key={`${article.source.name}-${index}`}
                    article={article}
                    hoverEffect={() => {
                        const card = document.getElementById(`card-${index}`);
                        card.classList.toggle('hover');
                    }}
                />
            ))}
        </div>
    );
};

export default News;