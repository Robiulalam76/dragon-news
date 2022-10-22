import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../ContextAPI/AuthProvider';
import toast from 'react-hot-toast';

const Register = () => {
    const { userEmailVerify, registerWithEmailPassword, updateUserProfile } = useContext(AuthContext)
    const [error, setError] = useState('')
    const [accepted, setAccepted] = useState(false)
    const navigate = useNavigate()

    const handleRegister = (event) => {
        event.preventDefault()
        const name = event.target.name.value
        const imageURL = event.target.imageURL.value
        const email = event.target.email.value
        const password = event.target.password.value
        console.log(name, imageURL, email, password)

        registerWithEmailPassword(email, password)
            .then((result) => {
                const user = result.user
                console.log(user)
                navigate('/login')
                handleUpadateProfile(name, imageURL)
                handleEmailVerify()
            })
            .catch((error) => {
                console.error(error)
                setError(error.message)
            })
    }

    const handleEmailVerify = () => {
        userEmailVerify()
            .then((result) => {
                console.log(result);
                toast.success('Please Your Verify Email Address')
            })
            .catch((error) => {
                console.error(error);
            })
    }


    const handleUpadateProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
    }

    const handleAccepted = event => {
        setAccepted(event.target.checked)
    }

    return (
        <div className='p-5 shadow rounded my-3 login-register'>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Full Name</Form.Label>
                    <Form.Control name='name' type="text" placeholder="Enter Your Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Image URL</Form.Label>
                    <Form.Control name='imageURL' type="text" placeholder="Enter Your image URL" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" />
                    <Form.Text className="text-danger">
                        {error?.slice(10)}
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                        type="checkbox"
                        onClick={handleAccepted}
                        label={<>Accept <Link to="/terms">Terms and conditions</Link></>} />
                </Form.Group>
                <Button variant="primary" type="submit" disabled={!accepted}>
                    Register
                </Button>
            </Form>
        </div>
    );
};

export default Register;