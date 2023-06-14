import { Link, useRouteError } from "react-router-dom";
import errorGif from '../../assets/animation/98044-404-error.json'
import Lottie from "lottie-react";
const ErrorPage = () => {
    const { error, status } = useRouteError()
    return (
        <div className='flex items-center h-screen p-20 bg-gray-100 text-black'>
            <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>

                <div className='max-w-md text-center'>
                    
                    <Lottie animationData={errorGif} loop={true}></Lottie>
                    <p className='text-2xl font-semibold md:text-3xl text-error mb-8'>
                        {error?.message}
                    </p>
                    <Link to='/' className='btn btn-outline btn-info'>
                        Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;