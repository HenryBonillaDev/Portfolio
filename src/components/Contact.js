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
            ...form,
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
                body: JSON.stringify(form),
            }
        );
        setButtonText('Enviado')
        let result = response.json();
        setFormDetails(form)
        if (result.code === 200) {
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
                    <form>
                        <Row>
                            <Col sm={6} className="px-1">
                                <input type="text" value={form.firstName} placeholder="Nombre" onChange={(e) => { onFormUpdate('firstName', e.target.value) }} />
                            </Col>
                            <Col sm={6} className="px-1">
                                <input type="text" value={form.lastName} placeholder="Apellido" onChange={(e) => { onFormUpdate('lastName', e.target.value) }} />
                            </Col>
                            <Col sm={6} className="px-1">
                                <input type="email" value={form.email} placeholder="Correo" onChange={(e) => { onFormUpdate('email', e.target.value) }} />
                            </Col>
                            <Col sm={6} className="px-1">
                                <input type="tel" value={form.phone} placeholder="Teléfono" onChange={(e) => { onFormUpdate('phone', e.target.value) }} />
                            </Col>
                            <Col sm={6} className="px-1">
                                <textarea row="6" value={form.message} placeholder="Mensaje" onChange={(e) => { onFormUpdate('message', e.target.value) }} />
                            </Col>
                            <Col sm={12} className="px-1">
                                <ReCAPTCHA
                                    sitekey="6Lc-ly8pAAAAAA10FbglaPO62tigmF2CV58_nreP"
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