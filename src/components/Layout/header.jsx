'use strict';
import React from 'react';

export default function Header(props) {

    return (
        <header className="container-fluid">
            <div className="container">
                <div className="row">
                    <div className="logo col col-md-2 col-xs-12 align-self-center">
                        <a href="" className="navbar-brand">
                            <img src={process.env.PUBLIC_URL + '/img/logo.png'} alt="logo_item" />
                        </a>
                    </div>
                    <div className="page__title col col-md-6 col-xs-12 align-self-center text text-center">
                        <h4 className="no-margin">LUYỆN THI TUYỂN SINH ĐẠI HỌC</h4>
                        <address className="no-margin">
                            Địa chỉ: Tầng 6 Ladeco, 266 Đội Cấn, Hà Nội
                            <br />
                            Tổng đài hỗ trợ khách hàng: <a className="telephone">18006750</a>
                        </address>
                    </div>
                    <div className="header__image_right col col-xs-12 col-md-3">
                        <img src={process.env.PUBLIC_URL + '/img/header_right_image.png'} alt="image_right" />
                    </div>
                </div>
            </div>
        </header>
    );
}