import React, { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc'
import { AuthContext } from '../../../Providers/AuthProvider';
import axios from 'axios';

const SocialLogin = () => {
    const {googleSignIn} = useContext(AuthContext)
    const handleGoogleSignIn = () => {
        googleSignIn()
        .then( result => {
            const logedUser = result.user;
            console.log(logedUser);
            const saveUser = { name: logedUser.displayName, email: logedUser.email, photo: logedUser.photoURL }
            console.log(saveUser);
            axios.post('http://localhost:5000/users', saveUser)
            .then(data => {
                console.log(data.data);
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