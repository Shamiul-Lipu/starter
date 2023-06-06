import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiOutlineBars3BottomLeft, HiXMark } from "react-icons/hi2";
import { Tooltip } from 'react-tooltip'
import Container from "../Container/Container";

const NavBar = () => {
    const user = 'Shamiul islam Shamiul Lipu'
    const [dropMenu, setDropMenu] = useState(false)
    // console.log(dropMenu);
    const navItems = <>
        <ul className={`flex flex-col md:flex-row justify-start md:justify-center items-start md:items-center gap-0 md:gap-2 `}>
            <li>
                <NavLink
                    to='/'
                    className={({ isActive }) => (isActive ? 'font-bold text-lg tracking-wide text-indigo-600 transition-colors duration-200 hover:text-blue-400' : 'font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400')}
                >
                    Home
                </NavLink>
            </li>
            <li>

            </li>
            <li>
                <NavLink
                    to='/blog'
                    className={({ isActive }) => (isActive ? 'font-bold text-lg tracking-wide text-indigo-600 transition-colors duration-200 hover:text-blue-400' : 'font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400')}
                >
                    Blog
                </NavLink>
            </li>
        </ul>

    </>
    return (
        <header className="  py-4 fixed w-full z-10 shadow-md">
            <Container>
                <div className="flex flex-col md:flex-row justify-between">
                    {/* logo & brand name */}
                    <div className="flex gap-2 mx-auto md:ml-0  items-center">
                        <h1>logo</h1>
                        <h3>Component</h3>
                    </div>

                    {/* nav and user */}
                    <nav className="flex gap-2 justify-between md:justify-evenly items-start md:items-center">

                        {/* menu and dropdo*/}
                        <div className="">
                            {/* dropdown toggle button */}
                            <button
                                onClick={() => setDropMenu(!dropMenu)}
                                className={`px-2 py-1 border-[3px] border-stone-600 rounded-lg block md:hidden`}
                            >
                                {dropMenu ? (
                                    <HiXMark
                                        className={`w-6 h-6`}
                                    />
                                ) : (
                                    <HiOutlineBars3BottomLeft
                                        className={`w-6 h-6`}
                                    />
                                )}
                            </button>
                            {/* nav items */}
                            <div className={`${dropMenu ? '' : 'hidden md:flex'}`}>
                                {
                                    navItems
                                }
                            </div>
                        </div>

                        {/* User */}
                        <div>
                            <div className="dropdown dropdown-end">
                                {/* <label tabIndex={0} className={`btn btn-ghost btn-circle avatar ${user && 'online'}`}>
                            <div className={`w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2`} >
                                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </label> */}

                                <label tabIndex={0} className={`btn btn-ghost btn-circle avatar ${user && 'online'}`} data-tooltip-id="my-tooltip"
                                    data-tooltip-content={`${user}`}
                                    data-tooltip-place="top">
                                    <div
                                        className={`w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2`}
                                        data-tip={`${user && user.name}`}
                                        data-place="left"
                                    >
                                        <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Avatar" />
                                    </div>
                                </label>

                                <Tooltip id="my-tooltip" place="left" />

                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                    <li>
                                        <Link to='/signup' className="justify-between hover:bg-slate-300">
                                            Sign up
                                        </Link>
                                    </li>
                                    <li></li>
                                    <>
                                        {
                                            user ?
                                                <button className="btn btn-active btn-primary">LogOut</button>
                                                : <NavLink
                                                    to='/login'
                                                    className={({ isActive }) => (isActive ? 'btn btn-primary' : 'btn btn-outline btn-primary')}
                                                >
                                                    Login
                                                </NavLink>
                                        }
                                    </>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </Container>
        </header>
    );
};

export default NavBar;