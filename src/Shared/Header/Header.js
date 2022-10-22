import { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../ContextAPI/AuthProvider';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import '../../Style/AllStyle.css'

const Header = () => {
    const { user, logOut } = useContext(AuthContext)

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
        <Navbar collapseOnSelect expand="lg" className='navbar-bg'>
            <Container>
                <Navbar.Brand className='fw-bold'><Link to='/' className='bg-primary py-2 px-2 rounded text-white text-decoration-none fw-bold'>Dragon </Link> News</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link className='ms-4 fw-bold text-decoration-none' to='/home' >Home</Link>
                        <Link className='ms-4 fw-bold text-decoration-none' to={`/category/08`} >News</Link>
                        <Link className='ms-4 fw-bold text-decoration-none' to='/about' >About</Link>
                        <div className='d-lg-none'>
                            <LeftSideNav></LeftSideNav>
                        </div>
                    </Nav>
                    <Nav className='d-flex align-items-center'>
                        <>
                            {
                                user?.uid ? <>
                                    <span className='fw-bold text-primary'>{user?.displayName}</span>
                                    <Button className='ms-3' variant="secondary" onClick={handleLogOut}>LogOut</Button>
                                </>
                                    :
                                    <>
                                        <Link className='ms-4 fw-bold text-decoration-none' to='/login'>Login</Link>
                                        <Link className='ms-4 fw-bold text-decoration-none' to='/register' >Register</Link>
                                    </>
                            }
                        </>
                        <Link className='ms-3' to='/profile'>
                            {
                                user?.photoURL ? <Image className='border border-2 border-primary' style={{ width: '40px' }} roundedCircle src={user?.photoURL}></Image> :
                                    <Image style={{ width: '40px' }} roundedCircle src='https://cdn-icons-png.flaticon.com/512/149/149071.png'></Image>
                            }
                        </Link>
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;