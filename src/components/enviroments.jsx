import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Enviroments extends Component {
    render() {
        const settings = {
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            rows: 1,
            className: 'slick-content',
            
        };
        return (
            <section class="environment">
                <div class="container">
                    <div class="slick-wrapper row">
                        <h3>MÔI TRƯỜNG HỌC</h3>
                        <Slider {...settings}>
                            <div>
                                <img src="./img/hinh-anh-lop-hoc.jpg" alt="logo_item" width={"100%"}/>
                            </div>
                            <div>
                                <img src="./img/hinh-anh-lop-hoc.jpg" alt="logo_item" width={"100%"}/>
                            </div>
                            <div>
                                <img src="./img/hinh-anh-lop-hoc.jpg" alt="logo_item" width={"100%"}/>
                            </div>
                            <div>
                                <img src="./img/hinh-anh-lop-hoc.jpg" alt="logo_item" width={"100%"}/>
                            </div>
                            <div>
                                <img src="./img/hinh-anh-lop-hoc.jpg" alt="logo_item" width={"100%"}/>
                            </div>
                            <div>
                                <img src="./img/hinh-anh-lop-hoc.jpg" alt="logo_item" width={"100%"}/>
                            </div>
                            <div>
                                <img src="./img/hinh-anh-lop-hoc.jpg" alt="logo_item" width={"100%"}/>
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>
        );
    }
}