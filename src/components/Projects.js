import { Col, Container, Row } from "react-bootstrap"
import Tab from 'react-bootstrap/Tab';
import { ProjectCard } from "./ProjectCard";
import img_test from "../assets/images/developer_banner.png"
import Nav from 'react-bootstrap/Nav';

export const Projects = () => {
    const projects = [
        {
            title: "Proyecto1",
            desc: "Descripcion del proyecto",
            imgUrl: img_test
        },
        {
            title: "Proyecto 2",
            desc: "Descripcion del proyecto",
            imgUrl: img_test
        },
        {
            title: "Proyecto 3",
            desc: "Descripcion del proyecto",
            imgUrl: img_test
        },
        {
            title: "Proyecto 4",
            desc: "Descripcion del proyecto",
            imgUrl: img_test
        },
    ]
    return (
        <section className="projects" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>Proyectos</h2>
                        <p>Descripción</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">1</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">2</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return (
                                                    <ProjectCard key={index}{...project}></ProjectCard>
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return (
                                                    <ProjectCard key={index}{...project}></ProjectCard>
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>


                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}