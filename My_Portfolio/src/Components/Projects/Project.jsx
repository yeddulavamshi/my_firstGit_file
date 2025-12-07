import React from 'react'
import './Project.css'
const Project = () => {

    const projectsData = [
        {
            title: "To-Do List",
            desc: "Using To-Do List you can arrage list of tasks to do and also easy to remember in case if you forget any task you can see the tasks in the to-do application",
            skills: ["Java", "Spring Boot", "MySQL", "React"],
            github: "https://github.com/yeddulavamshi/To-Do-List-project"
        },

        {
            title: "Weather App",
            desc: "Using To-Do List you can arrage list of tasks to do and also easy to remember in case if you forget any task you can see the tasks in the to-do application Using To-Do List you can arrage list of tasks to do and also easy to remember in case if you forget any task you can see the tasks in the to-do application",
            skills: ["Java", "Spring Boot", "MySQL", "React"],
            github: "https://github.com/yeddulavamshi"
        },

        {
            title: "First SpringBoot Application",
            desc: "Using To-Do List you can arrage list of tasks to do and also easy to remember in case if you forget any task you can see the tasks in the to-do application",
            skills: ["Java", "Spring Boot", "MySQL", "Postman"],
            github: "https://github.com/yeddulavamshi"
        },

        {
            title: "Employee Management System",
            desc: "Using To-Do List you can arrage list of tasks to do and also easy to remember in case if you forget any task you can see the tasks in the to-do application",
            skills: ["Java", "Spring Boot", "MySQL", "React", "Postman", "JavaScript", "html", "css"],
            github: "https://github.com/yeddulavamshi"
        },
    ];

    const MAX_VISIBLE_SKILLS = 3;

    return (
        <div className='container my-5 py-5' id="projects">
            <div className='education-head text-center mb-4'>
                <h3 className='h3 fw-bold'>Projects</h3>
                <p className='pb-3 text-secondary'>Here are some of my projects</p>
            </div>

            <div className='row g-4 justify-content-center'>
                {projectsData.map((project, index) => {

                    const visibleSkills = project.skills.slice(0, MAX_VISIBLE_SKILLS);
                    const remainingSkillsCount = project.skills.length - MAX_VISIBLE_SKILLS;

                    return (
                        <div className='col-12 col-md-6 col-lg-4' key={index}>
                            <div className="card project-card h-100 position-relative mx-3 mx-lg-0">
                                <div className="card-body text-center p-4 d-flex flex-column">

                                    <div className="mb-3">
                                        <i className="fa-brands fa-github fs-1 text-dark"></i>
                                    </div>

                                    <h5 className="card-title fw-bold mb-3">
                                        <a href={project.github} target="_blank" rel="noreferrer" className="text-decoration-none text-dark stretched-link">
                                            {project.title}
                                        </a>
                                    </h5>

                                    <p className="card-text text-muted mb-4 clamp-text">
                                        {project.desc}
                                    </p>

                                    <div
                                        className="d-flex justify-content-center flex-wrap gap-2 mt-auto skills-container"
                                        title={project.skills.join(', ')}
                                    >
                                        {visibleSkills.map((skill, i) => (
                                            <span key={i} className="badge bg-light text-dark border">
                                                {skill}
                                            </span>
                                        ))}

                                        {remainingSkillsCount > 0 && (
                                            <span className="badge bg-secondary text-white border">
                                                +{remainingSkillsCount}
                                            </span>
                                        )}
                                    </div>

                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Project
