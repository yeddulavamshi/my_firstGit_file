import React from 'react'
import './Education.css'
const Education = () => {

    const educationData = [
        { degree: "Master of Computer Applications (M.C.A)",college: "Vikrama Simhapuri University, Nellore" ,year: "2022 - 2024" },
        { degree: "Bachlore of Science (MECS)", college: "Sri Ramakrishna Degree College, Nandyala" ,year: "2018 - 2021" },
        { degree: "Board of Secondary (MPC)", college: "Sri Gnana Saraswathi Junior College, Bethamcherla" ,year: "2016 - 2018" },
    ];

  return (
    <div className='container my-5 py-5' id='education'>
      <div className='education-head text-center mb-4'>
        <h3 className='h3 fw-bold'>Education</h3>
        <p className='pb-3 text-secondary'>My academic background and qualifications</p>
      </div>
      <div className='row g-4 justify-content-center'>
      {educationData.map((edu, index) => (
                    <div className='col-12 col-md-6 col-lg-4' key={index}>
                        <div className="card h-100 text-center p-4 mx-3 mx-lg-0">
                            <div className="card-body">
                                <div className="icon-box mb-3">
                                    <i className="fa-solid fa-graduation-cap fs-2"></i>
                                </div>
                                
                                <h5 className="card-title fw-bold">{edu.degree}</h5>
                                <p className="card-text text-muted mb-2">{edu.college}</p>
                                
                                {/* Badge for Year */}
                                <span className="badge bg-dark rounded-pill px-3 py-2 mt-2">
                                    {edu.year}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
      </div>
    </div>
  )
}

export default Education
