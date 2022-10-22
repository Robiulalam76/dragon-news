import React from 'react';
import { Badge } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCard from '../../Shared/NewsSummaryCard/NewsSummaryCard';

const Category = () => {
    const newsCategory = useLoaderData()
    // console.log(newsCategory)
    return (
        <div>
            <h5>News Of Category <Badge bg="primary">{newsCategory.length}</Badge></h5>
            {
                newsCategory.map(news => <NewsSummaryCard
                    key={news._id}
                    news={news}
                ></NewsSummaryCard>)
            }
        </div>
    );
};

export default Category;