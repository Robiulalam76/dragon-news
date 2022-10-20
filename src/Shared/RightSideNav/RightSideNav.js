import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Button, ButtonGroup, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaTwitch, FaTwitter, FaFacebook, FaLinkedin, FaDribbble } from 'react-icons/fa';
import { Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../ContextAPI/AuthProvider';
import BrandCarousel from '../BrandCarousel/BrandCarousel';

const RightSideNav = () => {
    const { signUpWithGoogle } = useContext(AuthContext)
    const googleProvider = new GoogleAuthProvider;
    const navigate = useNavigate()

    const signUpGoogle = () => {
        signUpWithGoogle(googleProvider)
            .then((result) => {
                const user = result.user
                console.log(user)
                navigate('/')
            })
            .catch((error) => {
                console.error(error)
            })
    }
    return (
        <div>
            <div>
                <ButtonGroup vertical>
                    <Button onClick={signUpGoogle} className='mb-2' variant="outline-primary"><FaGoogle /> Login With Google</Button>
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