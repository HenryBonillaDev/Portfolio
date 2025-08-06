import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import image from "../assets/images/astronauta.svg";
import { useCallback } from "react";
import { useMemo } from "react";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(1);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = useMemo(() => [
    "Ingeniero de Sistemas",
    "Desarrollador de Software",
    "Analista de Sistemas",
    "Ingeniero de Automatización",
    "Analista de Datos"
  ], []);

  const [text, setText] = useState("");
  const [delta, setDelta] = useState(150 - Math.random() * 100);
  const period = 2000;

  const tick = useCallback(() => {
    const i = loopNum % toRotate.length;
    const fullText = toRotate[i];
    const updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(prev => prev + 1);
      setDelta(500);
    }
  }, [loopNum, isDeleting, text, toRotate]);

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [tick, delta]);




  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="banner" id="home">
      <Row className="align-items-center" style={{ width: '100%' }}>
        <Col xs={12} md={6} lg={7}>
          <span className="tagline">Bienvenidos a mi Portafolio</span>
          <h1>{`Hola, soy Duván Bonilla`}</h1>

          <h1>
            <span className="wrap">{text}</span>
          </h1>
          <div style={{ marginTop: '100px'}}>
            <p>
              Ingeniero de Sistemas y Computación con experiencia en planificación, diseño y desarrollo de software. Me destaco por un enfoque orientado al detalle y al logro, permitiéndome adoptar e implementar mejoras continuas en busca de la innovación tecnológica. Además, cuento con habilidades de comunicación efectiva, facilitando la colaboración en equipos multidisciplinarios y la articulación de soluciones tecnológicas.
            </p>
          </div>
          <button
            onClick={() => {
              scrollToSection("contact")
            }}
          >
            Contactame <i className="bi bi-arrow-right-circle"></i>
          </button>
        </Col>
        <Col xs={12} md={6} lg={5}>
          <img src={image} alt="Imagen" className="img-fluid" />
        </Col>
      </Row>
    </section>
  );
};