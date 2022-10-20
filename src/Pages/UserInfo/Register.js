import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../ContextAPI/AuthProvider';

const Register = () => {
    const { registerWithEmailPassword } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleRegister = (event) => {
        event.preventDefault()
        const name = event.target.name.value
        const imageUrl = event.target.imageUrl.value
        const email = event.target.email.value
        const password = event.target.password.value
        console.log(name, imageUrl, email, password)

        registerWithEmailPassword(email, password)
            .then((result) => {
                const user = result.user
                console.log(user)
                navigate('/login')
            })
            .then((error) => {
                console.error(error)
            })
    }

    return (
        <div>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Full Name</Form.Label>
                    <Form.Control name='name' type="text" placeholder="Enter Your Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Image URL</Form.Label>
                    <Form.Control name='imageUrl' type="text" placeholder="Enter Your image URL" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default Register;