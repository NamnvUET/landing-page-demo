import React from 'react';
import { NavLink } from 'react-router-dom';
import Routers from '../../Routers';

export default function Navigation(props) {

    function hasClass(element, className) {
        return (' ' + element.className + ' ').indexOf(' ' + className+ ' ') > -1;
    }

    function controlNav(){
        let myNavbar = document.getElementById('navbar');
        let navbarButton = document.getElementsByClassName('navbar-toggler')[0];
        let is_collapsed = hasClass(navbarButton, 'collapsed');

        if(!is_collapsed){
            myNavbar.classList.add("nav_sidebar");
            myNavbar.querySelector('.container').classList.add('nav_collapse_container');
            console.log('rgorgkorgrg')
        }
        else{
            myNavbar.classList.remove("nav_sidebar");
            myNavbar.querySelector('.container').classList.remove('nav_collapse_container');
        }

    }

    return (
        <nav className="navbar navbar-expand-md sticky-top no-padding" id='navbar'>
            <div className="container">
                <button className="navbar-toggler" type='button' data-bs-toggle="collapse" data-bs-target="#navbarContent"
                    aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation" onClick={controlNav}>
                    <i className="fas fa-bars"></i>
                </button>

                <div className="collapse navbar-collapse" id="navbarContent">
                    {/* <!-- NAVBAR LEFT --> */}
                    <ul className="navbar-nav me-auto my-lg-0 navbar-nav-scroll">
                        <li className="nav-item">
                            <NavLink to={'/'} className='nav-link'>Trang chủ</NavLink>
                        </li>
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