import { useEffect, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll)
    })

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
    
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      };

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="#home">Henry Bonilla</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === "home" ? 'active navbar-link' : 'navbar-link'} onClick={() => { onUpdateActiveLink('home') }}>Inicio</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === "skills" ? 'active navbar-link' : 'navbar-link'} onClick={() => { onUpdateActiveLink('skills') }}>Habilidades</Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === "projects" ? 'active navbar-link' : 'navbar-link'} onClick={() => { onUpdateActiveLink('projects') }}>Proyectos</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/henry-duvan-alexander-bonilla-urrego/" target="_blank"><i className="bi bi-linkedin"></i></a>
                            <a href="https://github.com/HenryBonillaDev" target="_blank"><i className="bi bi-github"></i></a>
                        </div>
                        <button className="vvd" onClick={() => { scrollToSection("contact") }}><span>Contactar</span></button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};