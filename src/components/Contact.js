import { useState } from "react"
import { Col, Row } from "react-bootstrap";
import ReCAPTCHA from "react-google-recaptcha";
import image from "../assets/images/developer_banner.png";

export const Contact = () => {
    const form = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    }

    const [formDetails, setFormDetails] = useState(form);
    const [buttonText, setButtonText] = useState('Enviar');
    const [status, setStatus] = useState({});
    const [captchaIsDone, setCaptchaIsDone] = useState(false);

    const onFormUpdate = (atr, value) => {
        setFormDetails({
            ...formDetails,
            [atr]: value
        })
    }

    function onChange(){
        console.log("ChangeDetected")
        setCaptchaIsDone(true)
    }

    const submit = async (e) => {
        e.preventDefault();
        setButtonText('Enviando...');
        let response = await fetch("https://prod-09.westus.logic.azure.com:443/workflows/23b3ba7c788948faa588c69094f914c8/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=Wf40Iafa9sh9xZVqEY6GxjMgOTElgC9ydwnBjCAl6u0",
            {
                method: "POST",
                headers: { "Content-Type": "Application/json" },
                body: JSON.stringify(formDetails),
            }
        );
        setButtonText('Enviado')
        let result = response;
        setFormDetails(form)
        if (result.status === 200) {
            setStatus({ success: true, message: "El mensaje fue enviado." })
        } else {
            setStatus({ success: false, message: "Hubo un problema, Si el problema persiste no dudes en contactarme por LinkedIn." })
        }
    }

    return (
        <section className="contact" id="contact">
            <Row className="align-items-center">
                <Col md={6}>
                    <img src={image} />
                </Col>
                <Col md={6}>
                    <h2>
                        Contactar
                    </h2>
                    <form onSubmit={submit}>
                        <Row>
                            <Col sm={6} className="px-1">
                                <input type="text" value={formDetails.firstName} placeholder="Nombre" onChange={(e) => { onFormUpdate('firstName', e.target.value) }} />
                            </Col>
                            <Col sm={6} className="px-1">
                                <input type="text" value={formDetails.lastName} placeholder="Apellido" onChange={(e) => { onFormUpdate('lastName', e.target.value) }} />
                            </Col>
                            <Col sm={6} className="px-1">
                                <input type="email" value={formDetails.email} placeholder="Correo" onChange={(e) => { onFormUpdate('email', e.target.value) }} />
                            </Col>
                            <Col sm={6} className="px-1">
                                <input type="tel" value={formDetails.phone} placeholder="Teléfono" onChange={(e) => { onFormUpdate('phone', e.target.value) }} />
                            </Col>
                            <Col sm={6} className="px-1">
                                <textarea row="6" value={formDetails.message} placeholder="Mensaje" onChange={(e) => { onFormUpdate('message', e.target.value) }} />
                            </Col>
                            <Col sm={12} className="px-1">
                                <ReCAPTCHA
                                    sitekey="6Lc5oS8pAAAAANvVBpQpfjlLA-FAPZuXflHA7Ga7"
                                    onChange={onChange}
                                />
                            </Col>
                            <Col sm={12} className="px-1">
                                <button className="btn btn-primary" type="submit" disabled={!captchaIsDone}>
                                    <span>
                                        {buttonText}
                                    </span>
                                </button>
                            </Col>
                            {
                                status.message &&
                                <Col>
                                    <p className={status.success === false ? "danger" : "success"}>
                                        {status.message}
                                    </p>
                                </Col>
                            }
                        </Row>
                    </form>
                </Col>
            </Row>
        </section>
    )
}