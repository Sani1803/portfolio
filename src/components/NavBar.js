import React, { Component } from 'react'
import './Navbar.css';
import { Link } from 'react-scroll';

export class Navbar extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            isNavbarOpen: false,
            isScrolled: false
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = (event) => {
        let flag = false;
        if (window.pageYOffset > 150) {
            flag = true;
        }

        this.setState({
            isScrolled: flag
        });
    }

    onCollapseClick = () => {
        this.setState({
            isNavbarOpen: !this.state.isNavbarOpen
        })
    }

    getNavbarClass() {
        if (this.state.isNavbarOpen) {
            return 'show';
        }

        return '';
    }

    getScrolledClass() {
        if (this.state.isScrolled) {
            return 'scrolled';
        }

        return '';
    }

    render() {
        return (
            <div>
                 <nav id="mainNavbar" className={`navbar navbar-dark navbar-expand-md py-0 fixed-top ${this.getScrolledClass()} ${this.getNavbarClass()}`} >
                    {/* <a href="#" class="navbar-brand">CANDY</a> */}
                    <button class="navbar-toggler" data-toggle="collapse" data-target="#navLinks" aria-label="Toggle navigation">
                        <span class={`navbar-toggler-icon ${this.getScrolledClass()}`} onClick = {this.onCollapseClick}></span>
                    </button>
                    <div className={`collapse navbar-collapse ${this.getNavbarClass()}`} id="navLinks">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link activeClass="active" to="home" spy={true} smooth={true} duration={600} onClick = {this.onCollapseClick}>
                                    Home
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link activeClass="active" to="about" spy={true} smooth={true} duration={600} onClick = {this.onCollapseClick}>
                                    About
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link activeClass="active" to="skills" spy={true} smooth={true} duration={600} onClick = {this.onCollapseClick}>
                                    Skills
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link activeClass="active" to="portfolio" spy={true} smooth={true} duration={600} onClick = {this.onCollapseClick}>
                                    Projects
                                </Link>  
                            </li>
                            <li class="nav-item">
                                <Link activeClass="active" to="contact" spy={true} smooth={true} duration={600} onClick = {this.onCollapseClick}>
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar