import React from 'react';
import { NavLink } from 'react-router-dom';
import Routers from '../../Routers';

export default function Navigation(props) {

    return (
        <nav className="navbar navbar-expand-md sticky-top no-padding">
            <div className="container" style={{height: "100%"}}>

                <NavLink to={'/'} className='navbar-brand'>Trang chủ</NavLink>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent"
                    aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fas fa-bars"></i>
                </button>

                <div className="collapse navbar-collapse " id="navbarContent">
                    {/* <!-- NAVBAR LEFT --> */}
                    <ul className="navbar-nav me-auto my-lg-0 navbar-nav-scroll">

                        <li className="nav-item">
                            <NavLink to={Routers.Pages.AboutUs} className='nav-link'>Về chúng tôi</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <NavLink to={Routers.Pages.Courses} className="nav-link dropdown-toggle" href="#"
                                id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Khóa học nâng cao</NavLink>
                            <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                                <li><a className="dropdown-item" href="#">ggg</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
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
                    <ul className="navbar-nav navbar-right ms-auto">
                        <li className="nav-item search-area">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}