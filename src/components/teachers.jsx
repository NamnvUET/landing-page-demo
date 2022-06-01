'use strict';

import React from 'react';

export default function Teachers(props) {
    return (
        <section className="page__teachers-list container-fluid p-0">
            <div className="container">
                <div className="row wrapper">
                    <div className="teachers-list-left col col-4">
                        <div className="content">
                            <h4 className="fw-bold">Đội ngũ thầy cô chuyên nghiệp</h4>
                            <p>100% thầy cô giáo giỏi với nhiều năm kinh nghiệm giáo dục
                                tới từ các trường học uy tín như TH Kim Liên, TH Lê Văn Tám,
                                TH phổ thông Chu Văn An
                            </p>
                        </div>
                    </div>
                    <div className="teachers-list-right teachers-list-item col col-8">
                        <div className="row row-cols-2" style={{ height: '100%' }}>
                            <div className="col col-6 teachers-list-item">
                                <div className="avatar">
                                    <img src="./img/avatar.png" alt=""/>
                                </div>
                                <div className="profile">
                                    <h5>Cô Phương Ly Ly</h5>
                                    <p>Thiên tài kiến trúc, Bà hoàng coder, kẻ hủy diệt bug, bla bla bla.
                                        Lorem ipsum bla bla bla
                                    </p>
                                </div>
                            </div>
                            <div className="col col-6 teachers-list-item">
                                <div className="avatar">
                                    <img src="./img/avatar.png" alt=""/>
                                </div>
                                <div className="profile">
                                    <h5>Cô Phương Ly Ly</h5>
                                    <p>Thiên tài kiến trúc, Bà hoàng coder, kẻ hủy diệt bug, bla bla bla.
                                        Lorem ipsum bla bla bla
                                    </p>
                                </div>
                            </div>
                            
                            <div className="col col-6 teachers-list-item">
                                <div className="avatar">
                                    <img src="./img/avatar.png" alt=""/>
                                </div>
                                <div className="profile">
                                    <h5>Cô Phương Ly Ly</h5>
                                    <p>Thiên tài kiến trúc, Bà hoàng coder, kẻ hủy diệt bug, bla bla bla.
                                        Lorem ipsum bla bla bla
                                    </p>
                                </div>
                            </div>
                            <div className="col col-6 teachers-list-item">
                                <div className="avatar">
                                    <img src="./img/avatar.png" alt=""/>
                                </div>
                                <div className="profile">
                                    <h5>Cô Phương Ly Ly</h5>
                                    <p>Thiên tài kiến trúc, Bà hoàng coder, kẻ hủy diệt bug, bla bla bla.
                                        Lorem ipsum bla bla bla
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );

}