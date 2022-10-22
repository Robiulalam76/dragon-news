import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../ContextAPI/AuthProvider';
import '../../Style/AllStyle.css'

const Login = () => {
    const { loginWithEmailPassword, setLoading } = useContext(AuthContext)
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    const handleLogin = (event) => {
        event.preventDefault()
        const email = event.target.email.value
        const password = event.target.password.value
        console.log(email, password)
        loginWithEmailPassword(email, password)
            .then(result => {
                const user = result.user
                setError('')
                console.log(user)
                if (user.emailVerified) {
                    navigate(from, { replace: true })
                }
                else {
                    toast.error('Your email is not verified. Please verify your email address.')
                }
                // navigate(from, { replace: true })
            })
            .catch((error) => {
                console.error(error)
                setError(error.message)
            })
            .finally(() => {
                setLoading(false);
            })
    }

    return (
        <div className='p-5 shadow rounded my-3 login-register'>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" />
                    <Form.Text className="text-danger">
                        {error}
                    </Form.Text>
                </Form.Group>
                <Button className='w-100' variant="primary" type="submit">
                    Login
                </Button>
            </Form>
        </div>
    );
};

export default Login;