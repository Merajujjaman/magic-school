import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaBook, FaHome, FaUsers } from 'react-icons/fa'
import useAdmin from '../hooks/useAdmin';
import useInstructor from '../hooks/useInstructor';

const DashboardLayout = () => {
    // const isAdmin = true;
    // const isInstructor = false;
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
                        {/* Sidebar content here */}
                        <li><NavLink to='/'> <FaHome></FaHome> Home</NavLink></li>
                        {
                            isAdmin && <>
                                <li><NavLink to='/dashboard/users'> <FaUsers></FaUsers> Manage Users</NavLink></li>
                                <li><NavLink to='/dashboard/manageClasses'> <FaBook></FaBook>  Manage Classes</NavLink></li>
                            </>
                        }
                        {
                            isInstructor && <>
                                <li><NavLink to='/dashboard/myClass'> <FaUsers></FaUsers> My Classes</NavLink></li>
                                <li><NavLink to='/dashboard/addClass'> <FaBook></FaBook> Add a Class</NavLink></li>
                            </>
                        }
                        {
                            !isInstructor && !isAdmin && <>
                                <li><NavLink to='/dashboard/manageClasses'> <FaBook></FaBook> My Selected Classes</NavLink></li>
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