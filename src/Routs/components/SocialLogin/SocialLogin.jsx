import React, { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc'
import { AuthContext } from '../../../Providers/AuthProvider';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const {googleSignIn} = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state?.pathname || '/';

    const handleGoogleSignIn = () => {
        googleSignIn()
        .then( result => {
            const logedUser = result.user;
            console.log(logedUser);
            const saveUser = { name: logedUser.displayName, email: logedUser.email, photo: logedUser.photoURL }
            console.log(saveUser);
            axios.post('https://illusoria-academy-of-magic-server.vercel.app/users', saveUser)
            .then(data => {
                console.log(data.data);
                navigate(from, { replace: true })
            })
            
        })

    }
    return (
        <div className='p-2'>
        <div className="divider">or</div>
        <button onClick={handleGoogleSignIn} className='btn btn-outline btn-block btn-primary'><FcGoogle className='mr-2 text-xl'></FcGoogle> Login with Google</button>
    </div>
    );
};

export default SocialLogin;