import React from 'react';
import { useForm } from 'react-hook-form';
import Lottie from "lottie-react";
import { Link } from 'react-router-dom';
import registerAnimation from '../../assets/animation/118046-lf20-oahmox5rjson.json'

const Ragister = () => {
    const { register, handleSubmit,  formState: { errors } } = useForm();
    const handleRegister = data => {
       
        if(data.password === data.comfirm_password){
            console.log(data);
        }

        else{
            console.log('password does not ');
        }
        

    };
    return (
        <>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col md:flex-row">
                    <div className="text-center md:w-1/2 ">
                    {/* animation lotti */}
                    
                        <Lottie animationData={registerAnimation} loop={true}></Lottie>
                    </div>
                    <div className="card md:w-1/2  shadow-2xl bg-base-100">
                        <h1 className="text-5xl font-bold text-center mt-2">Create Account</h1>
                        <form onSubmit={handleSubmit(handleRegister)} className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text"  {...register("name")} placeholder="name" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input type="file"  {...register("photoUrl")} placeholder="Photo Url" className="file-input file-input-bordered w-full" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" {...register("email")} placeholder="email" className="input input-bordered" required />
                            </div>


                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">New Password</span>
                                </label>
                                <input type="password" 
                                 {...register("password",  {pattern: /^(?=.*[A-Z])(?=.*[\W_]).{6,}$/})} placeholder="password" className="input input-bordered" required />
                                 {errors.password && <p className='text-error'>Password have 6  character, one uppercase and one special charecter</p>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password" 
                                 {...register("comfirm_password")} placeholder="password" className="input input-bordered" required />
                            </div>

                            <div className="form-control mt-4">
                                <input className="btn btn-primary" type="submit" value="Create" />
                            </div>
                        </form>
                        <p className='text-center my-4'>Already have an account?<Link to='/login' className='text-info'>Login</Link></p>
                        {/* <SocialLogin></SocialLogin> */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Ragister;