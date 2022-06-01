
import React from 'react';

export default function Navigation(props) {

    return (
        <nav className="navbar navbar-expand-sm sticky-top no-padding">
            <div className="container">

                <a className="navbar-brand" href=''>Trang chủ</a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent"
                    aria-controls="navbarContent">
                    <i className="fas fa-bars"></i>
                </button>

                <div className="collapse navbar-collapse justify-content-between" id="navbarContent">
                    {/* <!-- NAVBAR LEFT --> */}
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link " href="">Về chúng tôi</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="" id="navbarDropdownMenuLink" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Khóa học nâng cao
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="">ggg</a></li>
                                <li><a className="dropdown-item" href="">Another action</a></li>
                                <li><a className="dropdown-item" href="">Something else here</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="">Lịch học</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="">Đăng kí khóa học</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="">Tin tức</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="#">Liên hệ</a>
                        </li>
                    </ul>
                    {/* <!-- NAVBAR RIGHT --> */}
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}