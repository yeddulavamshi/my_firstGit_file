import React from 'react'

const Footer = () => {
    return (
        <div className='container mt-5 mb-3'>
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
            <div>
                <h3 className='text-center text-secondary fs-6'>© 2026 Vamshi Yeddula</h3>
            </div>
        </div>
    )
}

export default Footer
