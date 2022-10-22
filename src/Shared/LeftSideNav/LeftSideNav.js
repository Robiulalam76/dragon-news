import React, { useEffect, useState } from 'react';
import { Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('https://dragon-news-server-two-pink.vercel.app/news-categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div>
            <h5>All Category <Badge bg="primary">{categories.length}</Badge></h5>
            <div>
                {
                    categories.map(category => <p className='mb-3 fw-bold' key={category.id}>
                        <Link to={`/category/${category.id}`}>{category.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;