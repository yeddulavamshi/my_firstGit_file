import React from 'react'
import './Skill.css'

import java from '../../assets/java.svg'
import spring from '../../assets/spring.svg'
import react from '../../assets/react.svg'
import javascript from '../../assets/javascript-1.svg'
import bootstrap from '../../assets/bootstrap-1.svg'
import html from '../../assets/html5.svg'
import css from '../../assets/css3.svg'
import mysql from '../../assets/mysql.svg'
import oracle from '../../assets/oracle.svg'
import github from '../../assets/github.svg'
import postman from '../../assets/postman.svg'
import vscode from '../../assets/vscode.svg'

const skillsData = [
    { name: "Java",        img: java },
    { name: "Spring Boot", img: spring },
    { name: "React",       img: react },
    { name: "JavaScript",  img: javascript },
    { name: "Bootstrap",  img: bootstrap },
    { name: "HTML",  img: html },
    { name: "CSS",  img: css },
    { name: "MySQL",  img: mysql },
    { name: "Oracle",  img: oracle },
    { name: "Github",  img: github },
    { name: "Postman",  img: postman },
    { name: "VS Code",  img: vscode },
  ];

const Skill = () => {
    return (
        <div>

            <div className='container my-5 py-5' id='skills'>
                <div className='skill-head text-center mb-4'>
                    <h3 className='h3 fw-bold'>Skills</h3>
                    <p className='pb-3 text-secondary'>Here’s my toolkit for building full-stack applications.</p>
                </div>
                <div className='row gy-4 gx-0 g-lg-3 justify-conteny-center'>
                    {skillsData.map((skill, index) => (
                <div className='col-6 col-md-4 col-lg-2 p-0 px-lg-2' key={index}>
                    <div className="card skill-box h-100 text-center p-3 mx-3 mx-lg-0">
                        
                        <div className="mb-2">
                           <img 
                              src={skill.img} 
                              alt={skill.name} 
                              className="skill-img" 
                           />
                        </div>
                        
                        <p className="card-text skill-name fw-bold">{skill.name}</p>
                    </div>
                </div>
            ))}
                </div>
            </div>

        </div>
    )
}
import './Skill.css'
export default Skill
