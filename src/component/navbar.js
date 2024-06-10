import { Navbar, Container, Nav } from "react-bootstrap";
import { useState, useEffect } from "react";
import navicon1 from '../assents/nav-icon1.svg';
import navicon2 from '../assents/nav-icon2.svg';
import navicon3 from '../assents/nav-icon3.svg';

export const NavBar = () => {
    const [actlink, setActlink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const onUpdateActlink = (value) => {
        setActlink(value);
    }

    return (
        <Navbar className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="#home">
                    <h4 className="logo-1">An aS</h4>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={actlink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActlink('home')}>Home</Nav.Link>
                        <Nav.Link href="#skills" className={actlink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActlink('skills')}>Skills</Nav.Link>
                        <Nav.Link href="#project" className={actlink === 'project' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActlink('project')}>Project</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon me-50">
                            <a href="#"><img src={navicon1} alt=""/></a>
                            <a href="#"><img src={navicon2} alt=""/></a>
                            <a href="#"><img src={navicon3} alt=""/></a>
                        </div>
                        <div className="bivbnt"><button className="vvd bn2" onClick={() => console.log('connect')}><span>Contact Me</span></button></div>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
