import React from 'react';
import { NavLink } from 'react-router-dom';
import Routers from '../../Routers';

export default function Navigation(props) {

    return (
        <nav className="navbar navbar-expand-sm sticky-top no-padding">
            <div className="container">

                <NavLink to={'/'} className='navbar-brand'>Trang chủ</NavLink>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent"
                    aria-controls="navbarContent">
                    <i className="fas fa-bars"></i>
                </button>

                <div className="collapse navbar-collapse justify-content-between" id="navbarContent">
                    {/* <!-- NAVBAR LEFT --> */}
                    <ul className="navbar-nav">

                        <li className="nav-item">
                            <NavLink to={Routers.Pages.AboutUs} className='nav-link'>Về chúng tôi</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <NavLink to={Routers.Pages.Courses} className="nav-link dropdown-toggle" href="" id="navbarDropdownMenuLink" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false" >Khóa học nâng cao</NavLink>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="">ggg</a></li>
                                <li><a className="dropdown-item" href="">Another action</a></li>
                                <li><a className="dropdown-item" href="">Something else here</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <NavLink to={Routers.Pages.Schedules} className='nav-link'>Lịch học</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={Routers.Pages.RegisterCourses} className='nav-link'>Đăng kí khóa học</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={Routers.Pages.News} className='nav-link'>Tin tức</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={Routers.Pages.Contacts} className='nav-link'>Liên hệ</NavLink>
                        </li>
                    </ul>
                    {/* <!-- NAVBAR RIGHT --> */}
                    <ul className="navbar-nav navbar-right">
                        <li className="nav-item search-area">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}