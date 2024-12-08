import React from 'react';
import PageHeaderContent from '../../components/pageHeaderContent';
import { BsStack } from 'react-icons/bs'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css'
import { data } from "./utils";
import './styles.scss';
import { MdWork } from 'react-icons/md';
 

const Resume = () => {
    return (
        <section id="resume" className="resume">
            <PageHeaderContent
                headerText="My Resume"
                icon={<BsStack size={40} />}
            />

            <div className="timeline">
                <div className="timeline_experience">
                    <h3 className="timeline_experience_header-text">Experience</h3>
                    <VerticalTimeline
                        layout={'1-column'}
                        lineColor="var(--yellow-theme-main-color)"
                    >
                        {
                            data.experience.map((item, i) => (
                                <VerticalTimelineElement
                                    key={i}
                                    className="timeline_experience_vertical-timeline-element"
                                    contentStyle={{
                                        background: 'none',
                                        color: 'var(--yellow-theme-sub-text-color)',
                                        border: '1.5px solid var(--yellow-theme-main-color) '
                                    }}
                               
                                    //date="2022 - Present"
                                    icon={<MdWork />}
                                    iconStyle={{
                                        background: '#181818',
                                        color: 'var(--yellow-theme-main-color)',
                                    } }
                                >
                                    <div className="vertical-timeline-element-title-wrapper">
                                        <h3>
                                            {item.title}
                                        </h3>                                       
                                     </div>
                                    <div className="vertical-timeline-element-title-wrapper_subtitle">
                                        <h3>
                                            {item.subTitle}
                                        </h3>
                                    </div>
                                    <p className="vertical-timeline-element-title-wrapper-description">{item.description}</p>
                                    <h1>
                                        {item.date}
                                    </h1>
                                </VerticalTimelineElement>
                            ))
                        }
                    </VerticalTimeline>
                </div>
                <div className="timeline_education">
                    <h3 className="timeline_education_header-text">Education</h3>
                    <VerticalTimeline
                        layout={'1-column'}
                        lineColor="var(--yellow-theme-main-color)"
                    >
                    {
                        data.education.map((item, i) => (
                            <VerticalTimelineElement
                                key={i}
                                className="timeline_experience_vertical-timeline-element"
                                contentStyle={{
                                    background: 'none',
                                    color: 'var(--yellow-theme-sub-text-color)',
                                    border: '1.5px solid var(--yellow-theme-main-color) '
                                }}
                          
                                icon={<MdWork />}
                                iconStyle={{
                                    background: '#181818',
                                    color: 'var(--yellow-theme-main-color)',
                                }}
                            >
                                <div className="vertical-timeline-element-title-wrapper">
                                    <h3>
                                        {item.title}
                                    </h3>
                                </div>
                                <div className="vertical-timeline-element-title-wrapper_subtitle">
                                    <h3>
                                        {item.subTitle}
                                    </h3>
                                </div>
                                <p className="vertical-timeline-element-title-wrapper-description">{item.description}</p>

                            </VerticalTimelineElement>
                        ))
                        }
                    </VerticalTimeline>
                </div>
            </div>
        </section>
    );
};
export default Resume;