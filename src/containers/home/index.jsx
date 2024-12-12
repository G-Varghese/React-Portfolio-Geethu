import React from 'react';
import './styles.scss';
import { Animate } from 'react-simple-animate';

const Home = () => {


    return (
        <section id="home" className="home">
            <div className="home_text-wrapper">
                <h1>
                    Kia Ora, I'm Geethu<br />
                    Software Developer

                </h1>
            </div>
            <Animate play
                duration={1.5}
                delay={1}
                start={{
                    transform: "translateX(-900px)",  // Corrected "tranform" to "transform"
                }}
                end={{
                    transform: "translateX(0px)",   // Corrected "tranform" to "transform"
                }}
              >
                

            </Animate>
            
        </section>
    )
}
export default Home;