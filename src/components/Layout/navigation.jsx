import React, { useEffect } from 'react';
import Routers from '../../Routers';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { NavLink, Link } from 'react-router-dom';
import { getCategoryDemo } from '../../store/action/categoryAction'

const Navigation = ({ getCategoryDemo, categoryForPropNavigationComponent }) => {
    useEffect(() => {
        getCategoryDemo()
    }, [])

    function hasClass(element, className) {
        return (' ' + element.className + ' ').indexOf(' ' + className + ' ') > -1;
    }

    function controlNav() {
        let myNavbar = document.getElementById('navbar');
        let navbarButton = document.getElementsByClassName('navbar-toggler')[0];
        let is_collapsed = hasClass(navbarButton, 'collapsed');

        if (!is_collapsed) {
            myNavbar.classList.add("nav_sidebar");
            myNavbar.querySelector('.container').classList.add('nav_collapse_container');
            console.log('rgorgkorgrg')
        }
        else {
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
                                id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Khóa học</NavLink>
                            <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                                {
                                    categoryForPropNavigationComponent.map(cate => (

                                        < Link className="dropdown-item" data-toggle="tooltip" data-placement="right" title={cate.description} to={`${Routers.Pages.Category}/${cate.slug}`} key={cate.id}>
                                            {cate.category_name}
                                        </Link>
                                    ))
                                }

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
            </div >

        </nav >


    );
}


Navigation.propTypes = {
    categoryForPropNavigationComponent: PropTypes.array.isRequired,
    getCategoryDemo: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    categoryForPropNavigationComponent: state.categoryInRootReducer.categoryInCategoryReducer
})

export default connect(mapStateToProps, { getCategoryDemo })(Navigation)
