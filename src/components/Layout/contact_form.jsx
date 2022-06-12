'use strict';
import React from 'react';

export default function ContactForm(props) {

    return (
        <section className="form__box" id="contact_with_us">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="form__title">
                            <h3>LIÊN HỆ VỚI CHÚNG TÔI</h3>
                            <p>Chúng tôi sẽ phản hồi lại sớm nhất</p>
                        </div>

                        <form action="#" id="form-id">
                            <div className="form-group name">
                                <input type="text" name="fullname" placeholder="Họ và tên" className="form-control" id="fullname" />
                                <span type="hidden" id="fullname_errors"></span>
                            </div>
                            <div className="form-group email">
                                <input type="text" name="email" placeholder="Địa chỉ email" className="form-control" id="email" />
                                <span type="hidden" id="email_errors"></span>
                            </div>
                            <div className="form-group messsage">
                                <textarea name="message" cols="30" rows="10" placeholder="Thông tin đăng kí" className="form-control"
                                    id="message"></textarea>
                                <span type="hidden" id="message_errors"></span>
                            </div>
                            <div className="form--submit">
                                <div className="row">
                                    <div className="col-md-6 col-xs-12" id="remember_me">
                                        <input type="checkbox" name="check" id="form--checbox" />
                                        <label htmlFor="form--checbox">Đăng kí nhận thông báo</label>
                                    </div>
                                    <div className="col-md-6 col-xs-12" id="submit_btn">
                                        <button type="submit" name="submit" className="btn btn-primary">Gửi</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}