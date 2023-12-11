import { Col, Container, Row } from "react-bootstrap"
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
    const projects = [
        {
            title: "Proyecto1",
            desc: "Descripcion del proyecto",
            imgUrl: "../assets/images/developer_banner.png"
        },
        {
            title: "Proyecto 2",
            desc: "Descripcion del proyecto",
            imgUrl: "../assets/images/paisaje-bosque-niebla-3d.jpg"
        },
        {
            title: "Proyecto 3",
            desc: "Descripcion del proyecto",
            imgUrl: ""
        },
        {
            title: "Proyecto 4",
            desc: "Descripcion del proyecto",
            imgUrl: ""
        },
    ]
    return (
        <section className="projects" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>Proyectos</h2>
                        <p>Descripción</p>
                        <Tabs
                            defaultActiveKey="first"
                            id="uncontrolled-tab-example"
                            className="mb-3"
                        >
                            <Tab eventKey="first" title="1">
                                {
                                    projects.map((project, index) => {
                                        return (
                                            <ProjectCard key={index}{...project}></ProjectCard>
                                        )
                                    })
                                }
                            </Tab>
                            <Tab eventKey="second" title="2">
                                Tab content for 2
                            </Tab>
                            <Tab eventKey="third" title="3">
                                Tab content for 3
                            </Tab>
                        </Tabs>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}