import React, { useContext } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaBook, FaHome, FaMarker, FaUniversity, FaUsers } from 'react-icons/fa'
import useAdmin from '../hooks/useAdmin';
import useInstructor from '../hooks/useInstructor';
import { AuthContext } from '../Providers/AuthProvider';

const DashboardLayout = () => {
    const {user} = useContext(AuthContext)

    const [isAdmin] = useAdmin()
    const [isInstructor] = useInstructor()


    return (
        <>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                    <Outlet></Outlet>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-60 h-full bg-neutral text-white">
                        <div>
                            <img src={user?.photoURL} alt="user photo" className='w-32 rounded-full' />
                            <h3 className='text-xl font-semibold'>{user?.displayName}</h3>
                            <h3 className=' italic'>{user?.email}</h3>
                        </div>
                        {/* Sidebar content here */}
                        <li><NavLink to='/'> <FaHome></FaHome> Home</NavLink></li>
                        <hr />
                        {
                            isAdmin && <>
                                <li><NavLink to='/dashboard/users'> <FaUsers></FaUsers> Manage Users</NavLink></li>
                                <li><NavLink to='/dashboard/manageClasses'> <FaBook></FaBook>  Manage Classes</NavLink></li>
                            </>
                        }
                        {
                            isInstructor && <>
                                <li><NavLink to='/dashboard/myClass'> <FaUniversity></FaUniversity> My Classes</NavLink></li>
                                <li><NavLink to='/dashboard/addClass'> <FaMarker></FaMarker> Add a Class</NavLink></li>
                            </>
                        }
                        {
                            !isInstructor && !isAdmin && <>
                                <li><NavLink to='/dashboard/selectedClasses'> <FaBook></FaBook> My Selected Classes</NavLink></li>
                                <li><NavLink to='/dashboard/users'> <FaUsers></FaUsers> My Enroled Classes</NavLink></li>
                            </>
                        }



                    </ul>

                </div>
            </div>
        </>
    );
};

export default DashboardLayout;