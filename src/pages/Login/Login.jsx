import React, { useContext } from 'react';
import SocialLogin from '../../Routs/components/SocialLogin/SocialLogin';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Lottie from "lottie-react";
import loginAnimation from '../../assets/animation/121421-login.json'

const Login = () => {
    const {signIn} = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state?.pathname || '/';

    const handleLogin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'log in successfull',
                    showConfirmButton: false,
                    timer: 1500
                })
                from.reset()
                navigate(from, { replace: true })

            })

    }
    return (
        <>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col md:flex-row">
                    <div className="text-center md:w-1/2 ">
                        <Lottie animationData={loginAnimation} loop={true}></Lottie>
                    </div>
                    <div className="card md:w-1/2  shadow-2xl bg-base-100">
                        <h1 className="text-5xl text-center mt-2 font-bold">Login now!</h1>
                        <form onSubmit={handleLogin} className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>


                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>

                        
                            <div className="form-control mt-2">
                                <input className="btn btn-primary" type="submit" value="Login" />
                            </div>
                        </form>
                        <p className='text-center my-2'>New here?<Link to='/register' state={location?.state} replace className='text-info'>create an account</Link></p>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;