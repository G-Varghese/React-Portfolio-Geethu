import React from 'react';
import PageHeaderContent from '../../components/pageHeaderContent';
import { BsFillGearFill } from 'react-icons/bs';
import { skillsData } from "./utils";
import { Animate, AnimateKeyframes } from 'react-simple-animate';
import { Line } from "rc-progress";
import './styles.scss';

const Skills = () => {
    return (
        <section id="skills" className="skills">
            <PageHeaderContent
                headerText="My Skills"
                icon={<BsFillGearFill size={40} />}
            />

            <div className="skills_content-wrapper">
                {
                    skillsData.map((item, i) => (
                        <div key={i} className="skills_content-wrapper_inner-content">
                            <Animate
                                play
                                duration={1}
                                delay={0.3}
                                start={{
                                    transform: 'translateX(-200px)'
                                }}
                                end={{
                                    transform: 'translateX(0px)'
                                }}
                            >

                                <h3 className="skills_content-wrapper_inner-content_category-text">
                                    {item.label}
                                </h3>
                                <div className="skills_content-wrapper_inner-content_progressbar-container">
                                    {item.data.map((skillItem, j) => (
                                            <AnimateKeyframes
                                                play
                                                duration={1}
                                                keyframes={["opacity:1", "opacity:0"]}
                                                iterationCount="1"
                                            >
                                                <div className="progressbar-wrapper" key={j}>
                                                    <p> {skillItem.skillName}</p>
                                                    <Line
                                                        percent={skillItem.Percentage}
                                                        strokeWidth="2"
                                                        strokeColor="var(--yellow-theme-main-color)"
                                                        trailWidth="2"
                                                        strokeLinecap="square"
                                                    />
                                                </div>
                                            </AnimateKeyframes>
                                        ))}
                                </div>
                            </Animate>
                        </div>
                    ))}
            </div>
        </section>
    );
};
export default Skills;