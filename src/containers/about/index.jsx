import React from 'react';
import PageHeaderContent from '../../components/pageHeaderContent';
import { BsInfoCircleFill } from 'react-icons/bs';
import { Animate } from 'react-simple-animate';
import './styles.scss';
import { } from 'react-icons/di';
import { FaDatabase, FaCloud , FaPython, FaGithub} from 'react-icons/fa'

const personalDetails = [
    {
        label: "Name    :",
        value: "Geethu Susan Varghese",
    },
    {
        label: "Location:",
        value: "Christchurch",
    },
    {
        label: "E-mail  :",
        value: "geethuthomas2505@gmail.com",
    },
    {
        label: "Language:",
        value: "English, Malayalam",
    },
];

const jobSummary = 'Energetic software developer enthusiast, with a university degree in Master of Applied Computing. Skilled in diverse programming languages and computer competencies. Experienced in teaching, simplifying technical concepts, and promoting collaborative learning. Seeking new opportunities to contribute and develop new skills.';

const About = () => {
    return (
        <section id="about" className="about">
            <PageHeaderContent
                headerText="About Me"
                icon={<BsInfoCircleFill size={40} />}
            />
            <div className="about_content">
                <div className="about_content_personalWrapper">
                    <Animate
                        play
                        duration={1.5}
                        delay={1}
                        start={{
                            transform: "translateX(-900px)",
                        }}
                        end={{
                            transform: "translateX(0px)",
                        }}
                    >
                        <h3> Software Developer</h3>
                        <p>{jobSummary}</p>
                    </Animate>

                    <Animate
                        play
                        duration={1.5}
                        delay={1}
                        start={{
                            transform: "translateX(500px)",
                        }}
                        end={{
                            transform: "translateX(0px)",
                        }}
                    >
                        <h3 className="personalInformationHeaderText">Personal Information</h3>
                        <ul>
                            {personalDetails.map((item, i) => (
                                <li key={i}>
                                    <span className="title"> {item.label}</span>
                                    <span className="value"> {item.value}</span> {/* Fixed the value here */}
                                </li>
                            ))}
                        </ul>
                    </Animate>
                </div>

                <div className="about_content_servicesWrapper">
                    <Animate
                        play
                        duration={1.5}
                        delay={1}
                        start={{
                            transform: "translateX(600px)",
                        }}
                        end={{
                            transform: "translateX(0px)",
                        }}
                    >
                    <div className="about_content_servicesWrapper_innerContent">
                        <div>
                            <FaDatabase size={60} color=" var(--yellow-theme-main-color)" />
                        </div>
                        <div>
                            <FaCloud size={60} color=" var(--yellow-theme-main-color)" />
                        </div>
                        <div>
                            <FaGithub size={60} color=" var(--yellow-theme-main-color)" />
                        </div>
                        <div>
                            <FaPython size={60} color=" var(--yellow-theme-main-color)" />
                        </div>

                    </div>
                   </Animate> 
                    
                </div>
               
            </div>
        </section>
    );
};
export default About;
