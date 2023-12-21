import { Col, Container, Row } from "react-bootstrap"
import Tab from 'react-bootstrap/Tab';
import { ProjectCard } from "./ProjectCard";
import img_calc from "../assets/images/projects/calc.png"
import img_center from "../assets/images/projects/Centros_Geometricos.png"
import img_marvel from "../assets/images/projects/Marvel-game.png"
import img_data_extraction from "../assets/images/projects/DataExtraction.png"
import img_power_apps from "../assets/images/projects/PowerApps.png"
import img_power_automate from "../assets/images/projects/PowerAutomate.png"
import Nav from 'react-bootstrap/Nav';

export const Projects = () => {
    const projects = [
        {
            title: "Extracción de datos",
            desc: "Descarga de PDFs y pasarlos a texto para calcular la frecuencia de las palabras con xdotool y python",
            imgUrl: img_data_extraction
        },
        {
            title: "Calculadora",
            desc: "Calculadora con React",
            imgUrl: img_calc
        },
        {
            title: "Marvel Game",
            desc: "Juego 2D hecho en JAVA",
            imgUrl: img_marvel
        },
    ]

    const projects2 = [
        {
            title: "Centros Geométricos",
            desc: "Sistema para hallar centros geométricos en JAVA",
            imgUrl: img_center
        },
        {
            title: "Envio de Correos Power Automate",
            desc: "Response API para enviar correos",
            imgUrl: img_power_automate
        },
        {
            title: "Sistema de gestion de inventario - Power Apps",
            desc: "Sistema de gestion de inventario para un almacen de venta de suelos o baldosas",
            imgUrl: img_power_apps
        },
    ]
    return (
        <section className="projects" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>Proyectos</h2>
                        <p>En esta sección, se presentan los proyectos que he realizado haciendo uso de diversas tecnologías.</p>
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
                                            projects2.map((project, index) => {
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