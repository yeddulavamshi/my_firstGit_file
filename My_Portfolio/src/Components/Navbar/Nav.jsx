import React from 'react'
import './Nav.css'

const Nav = () => {

  document.addEventListener("click", function (event) {
    const navbar = document.getElementById("navbarNav");
    const toggler = document.querySelector(".navbar-toggler");
  
    if (
      navbar.classList.contains("show") &&
      !navbar.contains(event.target) &&
      !toggler.contains(event.target)
    ) {
      new bootstrap.Collapse(navbar).hide();
    }
  });

  return (
    <div className='nav-container position-sticky top-0 start-0 z-3 w-100'>
      <div className="container">
        <nav className='navbar navbar-expand-lg py-2'>
          <div className='container-fluid'>
            <a href="" className="navbar-brand text-dark fw-bold fs-3">Vamshi Yeddula</a>
            <button className="navbar-toggler text-white border-0" type="button"  data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <i className="ri-menu-line fs-3 text-dark"></i>
            </button>
            <div className='collapse navbar-collapse justify-content-center' id='navbarNav'>
              <ul className='navbar-nav gap-3 nav-menu'>
                <li className='nav-item'>
                  <a href="#about" className='nav-link fw-semibold fs-6 custom-link'>About</a>
                </li>
                <li className='nav-item'>
                  <a href="#skills" className='nav-link fw-semibold fs-6 custom-link'>Skills</a>
                </li>
                <li className='nav-item'>
                  <a href="#education" className='nav-link fw-semibold fs-6 custom-link'>Education</a>
                </li>
                <li className='nav-item'>
                  <a href="#projects" className='nav-link fw-semibold fs-6 custom-link'>Projects</a>
                </li>
                <li className='nav-item'>
                  <a href="#contact" className='nav-link fw-semibold fs-6 custom-link'>Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

      </div>
    </div>
  )
}

export default Nav
