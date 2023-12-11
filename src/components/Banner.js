import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import image from "../assets/images/astronauta.svg";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(1);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = [
    "Ingeniero de Sistemas",
    "Desarrollador",
    "Administrador de Proyectos",
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

  return (
    <section className="banner" id="home">
      <Row className="aling-items-center">
        <Col xs={12} md={6} xt={7}>
          
          <span className="tagline">Bienvenidos a mi Portafolio</span>
          <h1>{`Hola, soy Henry Bonilla`}</h1>
          <div style={{ height: '60px'}}>
          <h1>
            <span className="wrap">{text}</span>
          </h1>
          </div>
          <p>
            Descripción ........ Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Illo doloribus perspiciatis ipsum iure molestias
            assumenda consectetur excepturi maiores! Delectus accusantium a
            possimus id facilis laborum nemo odit voluptate quod. Beatae?
          </p>
          <button
            onClick={() => {
              console.log("conectar");
            }}
          >
            Contactame <i className="bi bi-arrow-right-circle"></i>
          </button>
        </Col>
        <Col xs={12} md={6} xt={5}>
          <img src={image} alt="Imagen" />
        </Col>
      </Row>
    </section>
  );
};