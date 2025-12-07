import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import vamshi from '../../assets/Vamshi.jpg'
import './Hero.css'

const Hero = () => {

    const handleResumeDownload = () => {
        const link = document.createElement("a");
        link.href = "/Vamshi_Yeddula_Resume.pdf";
        link.download = "Vamshi_Yeddula_Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };

    return (
        <div className='container my-5 pb-5' id='about'>
            <div className='row'>
                <div className='col'>
                    <div className="card my-4 mx-3 mx-lg-0">
                        <div className="card-body">
                            <div className='hero'>
                                <img className='img' src={vamshi} alt="" />
                                <h5 className="card-title fs-3 my-2 text-uppercase">Vamshi Yeddula</h5>
                            </div>
                            <div className='type-writer px-lg-4 pt-1 pt-lg-0'>
                                <p>I'm a
                                    <span>
                                        <Typewriter
                                            words={['Java Full-Stack Developer', 'Software Engineer', 'Spring & React Developer']}
                                            loop={false}
                                            cursor cursorStyle='|'
                                            typeSpeed={70}
                                            deleteSpeed={50}
                                            delaySpeed={1000} 
                                        ></Typewriter>
                                    </span>
                                </p>
                            </div>
                            <div>
                                <p className="card-text px-lg-4 about-text">Full-Stack Java Developer focused on building clean, efficient, and user-friendly applications. Skilled in Java, Spring Boot, React, JavaScript, and SQL, with a growing interest in building robust applications and improving user experience. I enjoy learning modern frameworks and writing clean, maintainable code. Building projects and applying my backend and frontend skills to deliver effective full-stack solutions.</p>
                            </div>
                            <div className='butns'>
                                <a href=""  onClick={handleResumeDownload} className="btn px-lg-4 my-3 mx-2 btn-dark">My Resume</a>
                                <a href="#contact" className="btn px-lg-4 my-3 mx-2 btn-light" >Get in Touch</a>
                            </div>
                            <div className='social-links my-3'>
                                <a href="https://github.com/yeddulavamshi" target="_blank" title="GitHub">
                                    <i className="fa-brands fa-github"></i>
                                </a>

                                <a href="https://www.linkedin.com/in/vamshiyeddula/" target="_blank" title="LinkedIn">
                                    <i className="fa-brands fa-linkedin"></i>
                                </a>

                                <a href="mailto:vamshikrishnayeddula@example.com" title="Email Me">
                                    <i className="fa-solid fa-envelope"></i>
                                </a>

                                <a href="https://www.instagram.com/y.vamshi_krishna/" target="_blank" title="Instagram">
                                    <i className="fa-brands fa-instagram"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Hero
