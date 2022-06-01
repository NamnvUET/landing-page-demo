'use strict';
import React from 'react';

export default function Header(props) {

    return (
        <header className="container-fluid">
            <div className="container">
                <div className="row">
                    <div className="logo col col-2 align-self-center">
                        <a href="" className="navbar-brand">
                            <img src="./img/logo.png" alt="logo_item" />
                        </a>
                    </div>
                    <div className="page__title col col-6 align-self-center text text-center">
                        <h4 className="no-margin">LUYỆN THI TUYỂN SINH ĐẠI HỌC</h4>
                        <address className="no-margin">
                            Địa chỉ: Tầng 6 Ladeco, 266 Đội Cấn, Hà Nội
                            <br />
                            Tổng đài hỗ trợ khách hàng: <a className="telephone">18006750</a>
                        </address>
                    </div>
                    <div className="header__image_right col col-3">
                        <img src="./img/31-10-2017_ảnh sinh viên.png" alt="image_right" />
                    </div>
                </div>
            </div>
        </header>
    );
}