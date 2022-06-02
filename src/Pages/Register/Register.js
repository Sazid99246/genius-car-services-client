import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'
import LoadingButton from '../Shared/LoadingButton/LoadingButton'
import auth from '../../firebase.init'
import { signOut } from 'firebase/auth';
const Register = () => {
    const navigate = useNavigate();
    const [agree, setAgree] = useState(false);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [createUserWithEmailAndPassword, user, loading, error,] = useCreateUserWithEmailAndPassword(auth);
    let registerError;
    if(user){
        signOut(auth)
        navigate('/login')
    }
    if(loading){
        return <LoadingButton/>
    }
    if(error){
        registerError = <p className="text-danger">{error?.message}</p>
    }
    const onSubmit = data => {
        createUserWithEmailAndPassword(data.email, data.password, {sendEmailVerification: true});
    }
    return (
        <div>
            <h2 className='text-center'>Please Register</h2>
            <Form className='w-50 mx-auto mt-2' onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter your name"
                        {...register("name", { required: true })}
                    />
                    <p className='text-danger'>
                        {errors.name?.type === 'required' && "Name is required"}
                    </p>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        {...register("email", { required: true, pattern: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/ })}

                    />
                    <p className='text-danger'>
                        {errors.email?.type === 'required' && "Email is required"}
                        {errors.email?.type === 'pattern' && "Please enter a valid email"}
                    </p>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        {...register("password", { required: true, minLength: 6 })}
                        type="password"
                        placeholder="Password"
                    />
                    <p className='text-danger'>
                        {errors.password?.type === 'required' && "Password is required"}
                        {errors.password?.type === 'minLength' && "Password should be at lease 6 characters or more"}
                    </p>
                </Form.Group>
                <Form.Group className="mb-3 d-flex" controlId="formBasicCheckbox">
                    <Form.Check onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                    <Form.Label className={`ps-2 ${agree ? '' : 'text-danger'}`} htmlFor="terms">Accept Genius Car Terms and Conditions</Form.Label>
                </Form.Group>
                {registerError}
                <input
                    disabled={!agree}
                    className='w-100 mx-auto btn btn-primary mb-2'
                    type="submit"
                    value="Register" />
                <p>Already have an account?
                    <Link className='text-primary pe-auto text-decoration-none' to='/login'>Please Login</Link>
                </p>
            </Form>
        </div>
    );
};

export default Register;