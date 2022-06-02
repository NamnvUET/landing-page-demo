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
            autoplay: true,
            speed: 1500,
            responsive: [
                // {
                //   breakpoint: 1024,
                //   settings: {
                //     slidesToShow: 3,
                //     slidesToScroll: 3,
                //     infinite: true,
                //     dots: true
                //   }
                // },
                // {
                //   breakpoint: 600,
                //   settings: {
                //     slidesToShow: 2,
                //     slidesToScroll: 2,
                //     initialSlide: 2
                //   }
                // },
                {
                  breakpoint: 576,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true
                  }
                }
              ]
        };
        return (
            <section class="environment">
                <div class="container">
                    <div class="slick-wrapper row">
                        <h3>MÔI TRƯỜNG HỌC</h3>
                        <Slider {...settings}>
                            <div>
                                <img src={process.env.PUBLIC_URL + '/img/hinh-anh-lop-hoc.jpg'} alt="logo_item" width={"100%"}/>
                            </div>
                            <div>
                                <img src={process.env.PUBLIC_URL + '/img/hinh-anh-lop-hoc.jpg'} alt="logo_item" width={"100%"}/>
                            </div>
                            <div>
                                <img src={process.env.PUBLIC_URL + '/img/hinh-anh-lop-hoc.jpg'} alt="logo_item" width={"100%"}/>
                            </div>
                            <div>
                                <img src={process.env.PUBLIC_URL + '/img/hinh-anh-lop-hoc.jpg'} alt="logo_item" width={"100%"}/>
                            </div>
                            <div>
                                <img src={process.env.PUBLIC_URL + '/img/hinh-anh-lop-hoc.jpg'} alt="logo_item" width={"100%"}/>
                            </div>
                            <div>
                                <img src={process.env.PUBLIC_URL + '/img/hinh-anh-lop-hoc.jpg'} alt="logo_item" width={"100%"}/>
                            </div>
                            <div>
                                <img src={process.env.PUBLIC_URL + '/img/hinh-anh-lop-hoc.jpg'} alt="logo_item" width={"100%"}/>
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>
        );
    }
}