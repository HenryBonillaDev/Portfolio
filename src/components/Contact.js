import { Col, Row } from "react-bootstrap";
import image from "../assets/images/developer_banner.png";
import imageWhatsapp from "../assets/images/whatsapp.png";

export const Contact = () => {
    const whatsappNumber = "573107874713";
    const message = encodeURIComponent("¡Hola! Me gustaría ponerme en contacto contigo.");

    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;

    return (
        <section className="contact" id="contact">
            <Row className="align-items-center">
                <Col md={6}>
                    <img src={image} alt="Contacto" />
                </Col>
                <Col md={6} className="text-center">
                    <h2>¿Te interesa hablar conmigo?</h2>
                    <p>No hay necesidad de llenar formularios aburridos. ¡Escríbeme directamente por WhatsApp!</p>
                    <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary"
                        style={{
                            fontSize: "1.2rem",
                            padding: "12px 24px",
                            borderRadius: "10px",
                            boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                            transition: "transform 0.2s",
                            textDecoration: "none",
                            display: "inline-block"
                        }}
                        onMouseOver={e => e.currentTarget.style.transform = "scale(1.05)"}
                        onMouseOut={e => e.currentTarget.style.transform = "scale(1)"}
                    >
                        <img src={imageWhatsapp} alt="WhatsApp" style={{ marginRight: "8px", width: "40px" }}></img> Enviar mensaje por WhatsApp
                    </a>
                </Col>
            </Row>
        </section>
    );
};
