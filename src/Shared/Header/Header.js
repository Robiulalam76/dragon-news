import React, { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../ContextAPI/AuthProvider';
import LeftSideNav from '../LeftSideNav/LeftSideNav';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    // console.log(user)

    const handleLogOut = () => {
        logOut()
            .then((result) => {
                console.log(result)
            })
            .catch((error) => {
                console.error(error)
            })
    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand className='fw-bold'><Link to='/' className='bg-primary py-2 px-2 rounded text-white text-decoration-none fw-bold'>Dragon </Link> News</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">Home</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <Nav.Link href="#deets">More deets</Nav.Link>
                        <div className='d-lg-none'>
                            <LeftSideNav></LeftSideNav>
                        </div>
                    </Nav>
                    <Nav className='d-flex align-items-center'>
                        <Nav.Link>
                            {
                                user?.uid ? <>
                                    <span>{user?.displayName}</span>
                                    <Button className='ms-3' variant="secondary" onClick={handleLogOut}>LogOut</Button>
                                </>
                                    : <>
                                        <Link to='/login'>Login</Link>
                                        <Link to='/register' >Register</Link>
                                    </>
                            }
                        </Nav.Link>
                        <Nav.Link>
                            {
                                user?.photoURL ? <Image style={{ width: '40px' }} roundedCircle src={user?.photoURL}></Image> :
                                    <Image style={{ width: '40px' }} roundedCircle src='https://cdn-icons-png.flaticon.com/512/149/149071.png'></Image>
                            }
                        </Nav.Link>
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;