import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Login = () => {
    const { logInUser, setUser } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState({});

    console.log(location);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log({email, password});


        // reset status
        setSuccess(false);
        setError({});


        logInUser(email, password)
            .then((result) => {
                const user = result.user
                setUser(user)
                navigate(location?.state ? location.state : '/')
                setSuccess(true);
                // console.log(user)
            })
            .catch((err) => {
                setError({ ...error, login: err.code });
            })
    }

    return (
        <div className='min-h-screen flex justify-center items-center'>
            <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
                <h2 className='text-2xl font-bold text-center'>Login your account</h2>
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name='email' type="email" placeholder="email" className="input input-bordered rounded-none" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input name='password' type="password" placeholder="password" className="input input-bordered rounded-none" required />
                        {
                            error.login &&
                            <label className="label text-sm text-red-500">
                                {error.login}
                            </label>
                        }
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-neutral rounded-none ">Login</button>
                    </div>
                </form>
                {
                    success && <p className='text-green-600 ml-8 mb-2'>Login is successful</p>
                }
                <p className='text-center'>Don't have an account? <Link className='text-red-600' to="/auth/register">Register</Link></p>
            </div>
        </div>
    );
};

export default Login;