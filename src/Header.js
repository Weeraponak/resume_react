import React from 'react'
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

function Header() {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
            <Link to="about" smooth={true} duration={1000} class="navbar-brand js-scroll-trigger" href="#about">
                <span class="d-block d-lg-none">Weerapon Akkho</span>
                <span class="d-none d-lg-block"><img class="img-fluid img-profile rounded-circle mx-auto mb-2" src="assets/img/profile1.jpg" alt="" /></span>
            </Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav">
                    <li class="nav-item"><Link to="about" smooth={true} duration={1000} class="nav-link js-scroll-trigger" href="#about">About</Link></li>
                    <li class="nav-item"><Link to="experience" smooth={true} duration={1000} class="nav-link js-scroll-trigger" href="#experience">Experience</Link></li>
                    <li class="nav-item"><Link to="education" smooth={true} duration={1000} class="nav-link js-scroll-trigger" href="#education">Education</Link></li>
                    <li class="nav-item"><Link to="skills" smooth={true} duration={1000} class="nav-link js-scroll-trigger" href="#skills">Skills</Link></li>
                    <li class="nav-item"><Link to="interests" smooth={true} duration={1000} class="nav-link js-scroll-trigger" href="#interests">Interests</Link></li>
                    <li class="nav-item"><Link to="awards" smooth={true} duration={1000} class="nav-link js-scroll-trigger" href="#awards">Awards</Link></li>
                </ul>
            </div>
        </nav>
        <div class="container-fluid p-0"></div>
        </>
    )
}

export default Header
