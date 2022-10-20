import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from 'react-icons/fa';


const NewsSummaryCard = ({ news }) => {
    const { _id, title, total_view, author, details, image_url, rating, } = news
    // console.log(news)
    return (
        <div>
            <Card className="mb-5">
                <Card.Header>
                    <div className='d-flex justify-content-between align-items-center'>
                        <div className='d-flex align-items-center'>
                            <Image
                                style={{ width: '50px' }}
                                roundedCircle
                                src={author.img}
                            ></Image>
                            <div className='ms-2'>
                                <p className='mb-0'>{author.name}</p>
                                <small>{author.published_date}</small>
                            </div>
                        </div>
                        <div>
                            <FaRegBookmark className='me-2' />
                            <FaShareAlt />
                        </div>
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img variant="top" src={image_url} />
                    <Card.Text>
                        {
                            details.length >= 250 ? <p>{details.slice(0, 250) + '...'} <Link className='text-primary' to={`/news/${_id}`}>Read More Story</Link></p> : <p>{details}</p>
                        }
                    </Card.Text>

                </Card.Body>
                <Card.Footer className="text-muted">
                    <div className='d-flex justify-content-between align-items-center'>
                        <div className='d-flex align-items-center'>
                            <FaStar className='text-warning' />
                            <FaStar className='text-warning' />
                            <FaStar className='text-warning' />
                            <FaStar className='text-warning' />
                            <small className='ms-2'>{rating.number}</small>
                        </div>
                        <div className='d-flex align-items-center'>
                            <FaEye className='me-2' />
                            <small >{total_view}</small>
                        </div>
                    </div>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default NewsSummaryCard;