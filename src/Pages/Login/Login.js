import React from 'react';
import { Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword, useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import LoadingButton from '../Shared/LoadingButton/LoadingButton';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';

const Login = () => {
    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(auth);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";
    const { register, getValues, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = (data) => {
        signInWithEmailAndPassword(data.email, data.password);
    }
    const email = getValues("email");
    const handlePasswordReset = async () => {
        await sendPasswordResetEmail(email);
        alert('Sent email');
    }

    let signInError;
    if (user) {
        navigate(from, { replace: true })
    }
    if (loading || sending) {
        return <LoadingButton />
    }
    if (error || resetError) {
        signInError = <p className="text-danger">{error?.message || resetError?.message}</p>
    }
    return (
        <div>
            <h2 className='text-center text-primary'>Please Login</h2>
            <Form onSubmit={handleSubmit(onSubmit)} className='w-50 mx-auto mt-2'>
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
                {signInError}
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control className='btn btn-primary' type="submit" value="Login" />
                </Form.Group>
                <p>Don't have an account?
                    <Link className='text-primary pe-auto text-decoration-none' to='/register'>Please Register</Link>
                </p>
                <p onClick={handlePasswordReset}>Forget Password</p>
            </Form>
            <SocialLogin />
        </div>
    );
};

export default Login;