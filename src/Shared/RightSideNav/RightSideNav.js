import React from 'react';
import { Button, ButtonGroup, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaTwitch, FaTwitter, FaFacebook, FaLinkedin, FaDribbble } from 'react-icons/fa';
import BrandCarousel from '../BrandCarousel/BrandCarousel';

const RightSideNav = () => {
    return (
        <div>
            <div>
                <ButtonGroup vertical>
                    <Button className='mb-2' variant="outline-primary"><FaGoogle /> Login With Google</Button>
                    <Button variant="outline-primary"><FaGithub /> Login With Github</Button>
                </ButtonGroup>
            </div>
            <div className='mt-4'>
                <p>Find Us On</p>
                <ListGroup>
                    <ListGroup.Item className='mb-3'><FaFacebook /> Facebook</ListGroup.Item>
                    <ListGroup.Item className='mb-3'><FaTwitter /> Twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-3'><FaTwitch /> Twitch</ListGroup.Item>
                    <ListGroup.Item className='mb-3'><FaLinkedin /> LinkedIn</ListGroup.Item>
                    <ListGroup.Item className='mb-3'><FaDribbble /> Dribbble</ListGroup.Item>
                </ListGroup>
            </div>
            <div>
                <BrandCarousel></BrandCarousel>
            </div>
        </div>
    );
};

export default RightSideNav;