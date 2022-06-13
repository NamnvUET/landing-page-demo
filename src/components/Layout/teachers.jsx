'use strict';

import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getTeachersDemo } from '../../store/action/teacherAction'

const Teacher = ({ getTeachersDemo, teacherForPropTeacherComponent }) => {
    //GetTodos
    useEffect(() => {
        getTeachersDemo()
    }, [])

    return (
        <div className="section-wrapper">
            <section className='page__teachers-list-background container-fluid p-0'>
                <div className="left-background"></div>
                <div className="right-background"></div>
            </section>
            <section className="page__teachers-list container-fluid p-0">
                <div className="container">
                    <div className="row wrapper">
                        <div className="teachers-list-left col col-md-4 col-xs-12">
                            <div className="content">
                                <h4 className="fw-bold">Đội ngũ thầy cô chuyên nghiệp 1</h4>
                                <p>100% thầy cô giáo giỏi với nhiều năm kinh nghiệm giáo dục
                                    tới từ các trường học uy tín như TH Kim Liên, TH Lê Văn Tám,
                                    TH phổ thông Chu Văn An
                                </p>
                            </div>
                        </div>
                        <div className="teachers-list-right col col-md-8 col-xs-12">
                            <div className="row row-cols-md-2 row-cols-xs-2">
                                {
                                    teacherForPropTeacherComponent.map(teacher => (
                                        <div key={teacher.id} className="col col-6 teachers-list-item">
                                            <div className="avatar">
                                                <img src={process.env.PUBLIC_URL + '/img/avatar.png'} alt="" />
                                            </div>
                                            <div className="profile">
                                                <h5>{teacher.name}</h5>
                                                <p>{teacher.description}
                                                </p>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

Teacher.propTypes = {
    teacherForPropTeacherComponent: PropTypes.array.isRequired,
    getTeachersDemo: PropTypes.func.isRequired
}

const mapStateToProps = state => (
    {
        teacherForPropTeacherComponent: state.teacherInRootReducer.teacherInTeacherReducer,
    }
)

export default connect(mapStateToProps, { getTeachersDemo })(Teacher)
