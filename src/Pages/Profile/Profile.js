import React, { useContext } from 'react';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../ContextAPI/AuthProvider';

const Profile = () => {
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
        <Card className='container bg-white rounded shadow'>
            <div className='mx-auto pt-3' style={{ margin: '0 auto' }}>
                <img className='rounded-pill d-flex justify-content-center border border-2 border-primary' style={{ width: '100px', margin: '0 auto' }} src={user?.photoURL} alt="" />
            </div>
            <div>
                <h4 className='text-center py-2'>{user?.displayName}</h4>
            </div>

            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" value={user?.displayName} placeholder={user?.email} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" value={user?.email} placeholder={user?.email} />
                </Form.Group>
                <Button onClick={handleLogOut} className='w-100 fw-bold my-3' variant="primary" type="submit">
                    LogOut
                </Button>
            </Form>
        </Card>
    );
};

export default Profile;