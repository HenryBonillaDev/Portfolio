import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import image from "../assets/images/astronauta.svg";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(1);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = [
    "Ingeniero de Sistemas",
    "Desarrollador de Software",
    "Analista de Sistemas",
    "Ingeniero de Automatización",
    "Analista de Datos"
  ];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(350 - Math.random() * 100);
  const period = 2000;
  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);
    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="banner" id="home">
      <Row className="aling-items-center">
        <Col xs={12} md={6} lg={7}>

          <span className="tagline">Bienvenidos a mi Portafolio</span>
          <h1>{`Hola, soy Henry Bonilla`}</h1>
          
            <h1>
              <span className="wrap">{text}</span>
            </h1>
          
          <p>
            Ingeniero de Sistemas y Computación en formación en la Universidad Pedagógica y Tecnológica de Colombia. Con conocimientos en bases de datos (Oracle, MySQL, MongoDB) y desarrollo de software (Java, Python, JavaScript, TypeScript). Experiencia en tecnologías como Angular, Spring Boot, .Net y Docker. Familiarizado con sistemas operativos Linux y Windows. Orientado al logro y al detalle, con habilidades para trabajar en equipo y facilidad para adquirir nuevos conocimientos.
          </p>
          <button
            onClick={() => {
              scrollToSection("contact")
            }}
          >
            Contactame <i className="bi bi-arrow-right-circle"></i>
          </button>
        </Col>
        <Col xs={12} md={6} lg={5}>
          <img src={image} alt="Imagen" />
        </Col>
      </Row>
    </section>
  );
};