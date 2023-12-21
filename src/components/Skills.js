import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Percentage } from "./percentage";

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-box">
                            <h2>
                                Habilidades
                            </h2>
                            <p>Descripción</p>
                            <Carousel className="skill-slider" responsive={responsive} infinite={true} >
                                <div className="item">
                                    <Percentage percentage={80} color="#63b1d8"></Percentage>
                                    <h5>Java / Spring Boot</h5>
                                </div>
                                <div className="item">
                                    <Percentage percentage={60} color="#63b1d8"></Percentage>
                                    <h5>Python</h5>
                                </div>
                                <div className="item">
                                    <Percentage percentage={90} color="#63b1d8"></Percentage>
                                    <h5>Bases de Datos</h5>
                                </div>
                                <div className="item">
                                    <Percentage percentage={90} color="#63b1d8"></Percentage>
                                    <h5>Angular</h5>
                                </div>
                                <div className="item">
                                    <Percentage percentage={70} color="#63b1d8"></Percentage>
                                    <h5>React</h5>
                                </div>
                                <div className="item">
                                    <Percentage percentage={60} color="#63b1d8"></Percentage>
                                    <h5>PHP</h5>
                                </div>
                                <div className="item">
                                    <Percentage percentage={80} color="#63b1d8"></Percentage>
                                    <h5>Microsoft 365</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Skills;