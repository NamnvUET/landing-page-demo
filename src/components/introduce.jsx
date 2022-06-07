import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getContentDemo } from '../store/action/contentAction'
import { getClassesDemo } from '../store/action/classAction'

const Introduce = ({ getContentDemo, getClassesDemo, contentForPropIntroduceComponent, classForPropIntroduceComponent }) => {
    //GetTodos
    useEffect(() => {
        getContentDemo()
        getClassesDemo()
    }, [])

    return (
        <section className="page__introduce">
            <div className="container">
                <div className="row">
                    <div className="col col-md-8 col-xs-12">
                        <div className="active_goal">
                            <h4 className="slogan">
                                VÌ SỰ NGHIỆP GIÁO DỤC
                            </h4>
                            <p>Cơ sở vật chất đẹp và nhiều lớp chọn lọc, đảm bảo chọn giờ học và sắp xếp
                                ngày học phù hợp. Đồng hành cùng bộ giáo dục quốc gia.
                                Đề luyện thi chất lượng, có bài giải cho bài thi
                            </p>
                        </div>
                        <div className="row row-cols-md-2 row-cols-xs-1 page__introduce_list">
                            {contentForPropIntroduceComponent.map(content => (
                                <div key={content.id} className="col col-md-6 col-xs-12 d-flex align-items-center page__introduce_item">
                                    <div className="icon">
                                        <img src={content.image} alt="" />
                                    </div>
                                    <div className="content">
                                        <h5>{content.title}</h5>
                                        <p>{content.content}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="col-md-4 col-xs-12 class_list">
                        <div className="card">
                            <div className="card-header">
                                LỊCH TUYỂN SINH
                            </div>
                            <ul className="list-group list-group-flush">
                                {classForPropIntroduceComponent.map(_class => (
                                    <li key={_class.id} className="list-group-item">
                                    <div className="d-flex justify-content-between">
                                        <div className="begin_time align-self-center">
                                        {_class.start_time}
                                        </div>
                                        <div className="class_info align-self-center">
                                            <h6>{_class.class_name}</h6>
                                            <span>{_class.description}</span>
                                            <div className="review">
                                                <img src={_class.teacher_image} alt="" />
                                                <div className="star-wrapper">
                                                    <a href="#" className="fa fa-star s1"></a>
                                                    <a href="#" className="fa fa-star s2"></a>
                                                    <a href="#" className="fa fa-star s3"></a>
                                                    <a href="#" className="fa fa-star s4"></a>
                                                    <a href="#" className="fa fa-star s5"></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

Introduce.propTypes = {
    contentForPropIntroduceComponent: PropTypes.array.isRequired,
    classForPropIntroduceComponent: PropTypes.array.isRequired,
    getContentDemo: PropTypes.func.isRequired,
    getClassesDemo: PropTypes.func.isRequired
}

const mapStateToProps = state => (
    {
        contentForPropIntroduceComponent: state.contentInRootReducer.contentInContentReducer,
        classForPropIntroduceComponent: state.classInRootReducer.classInClassReducer
    }
)

export default connect(mapStateToProps, { getContentDemo, getClassesDemo })(Introduce)
