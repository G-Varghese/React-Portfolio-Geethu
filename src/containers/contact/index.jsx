import React from 'react';
import PageHeaderContent from '../../components/pageHeaderContent';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Animate } from 'react-simple-animate';
import { BsFillTelephoneFill, BsFillEnvelopeFill } from 'react-icons/bs';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import './styles.scss';

const contactDetails = [
    {
        label: "Contact No:",
        value: "+64 27 397 9683",
        icon: <BsFillTelephoneFill size={20} />,
    },
    {
        label: "Email_ID  :",
        value: (
            <a href="mailto:geethuthomas2505@gmail.com?subject=Initial Communication&body=I want to reach out...">
                geethuthomas2505@gmail.com
            </a>
        ),
        icon: <BsFillEnvelopeFill size={20} />,
    },
    {
        label: "LinkedIn  :",
        value: (
            <a href="https://www.linkedin.com/in/geethuvarghese/" target="_blank" rel="noopener noreferrer">
               LinkedIn Profile
            </a>
        ),
        icon: <FaLinkedin size={20} />,
    },
    {
        label: "GitHub   :",
        value: (
            <a href="https://github.com/G-Varghese" target="_blank" rel="noopener noreferrer">
                GitHub Profile
            </a>
        ),
        icon: <FaGithub size={20} />,
    },
];

const Contact = () => {
    return (
        <section id="contact" className="contact">
            <PageHeaderContent
                headerText="Contact Me"
                icon={<BsFillPersonLinesFill size={40} />}
            />
            <div className="contact-content">
                <div className="contact-content-wrapper">
                    {/* Animation for the title */}
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
                    </Animate>

                    {/* Animation for contact details */}
                    <Animate
                        play
                        duration={1.5}
                        delay={1.5}
                        start={{
                            transform: "translateX(500px)",
                        }}
                        end={{
                            transform: "translateX(0px)",
                        }}
                    >
                        <div className="contact-details-box">
                            <ul>
                                {contactDetails.map((item, i) => (
                                    <li key={i} className="contact-item">
                                        {item.icon}
                                        <span className="contact-label">{item.label}</span>
                                        <span className="contact-value">{item.value}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Animate>
                </div>
            </div>
        </section>
    );
};

export default Contact;
