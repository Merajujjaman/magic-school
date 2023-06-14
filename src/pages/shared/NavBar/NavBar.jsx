import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';
import useAdmin from '../../../hooks/useAdmin';
import useInstructor from '../../../hooks/useInstructor';
import logo from '../../../assets/images/magiclogo.jpg'

const NavBar = () => {
    const { user, logOut} = useContext(AuthContext)
    const [isAdmin] = useAdmin()
    const [isInstructor] = useInstructor()
    const navigate = useNavigate()
    const handleLogOut = () => {
        logOut()
            .then(() => {
                navigate('/')
            })
            .catch(error => console.log(error))
    }
    const navRouts = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/classes'>Classes</NavLink></li>
        <li><NavLink to='/instructors'>Instructors</NavLink></li>
        
        { isAdmin && <li><NavLink to='/dashboard/users'>Dashboard</NavLink></li> }
        { isInstructor && <li><NavLink to='/dashboard/myClass'>Dashboard</NavLink></li> }
        { !isInstructor && !isAdmin && <li><NavLink to='/dashboard/selectedClasses'>Dashboard</NavLink></li> }

    </>

    return (
        <div className="navbar fixed top-0 z-30 w-full bg-black text-white font-bold opacity-70 px-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-black text-white font-bold rounded-box w-52">
                        {navRouts}
                    </ul>
                </div>
                <img src={logo} alt="logo" className='w-12 hidden md:block' />
                <p className="btn btn-ghost normal-case text-xl">Academy</p>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navRouts}
                </ul>
            </div>
            <div className="navbar-end">
                <div className='mr-2'>
                    {
                        user? <button onClick={handleLogOut} className='btn btn-outline btn-primary'>Log out</button>
                        :
                        <Link to='/login'><button className='btn btn-outline btn-primary'>Login</button></Link>
                    }
                </div>
                {
                    user &&
                    <>
                        <img src={user?.photoURL} title={user?.displayName} alt="user photo" className='w-12 rounded-full mr-2' />
                    </>
                }
                
            </div>
        </div>
    );
};

export default NavBar;