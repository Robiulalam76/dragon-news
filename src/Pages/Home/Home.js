import React from 'react';
import { Badge } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCard from '../../Shared/NewsSummaryCard/NewsSummaryCard';

const Home = () => {
    const allNews = useLoaderData()

    return (
        <div>
            <h5>News <Badge bg="primary">{allNews.length}</Badge></h5>
            {
                allNews.map(news => <NewsSummaryCard
                    key={news._id}
                    news={news}
                ></NewsSummaryCard>)
            }
        </div >
    );
};

export default Home;