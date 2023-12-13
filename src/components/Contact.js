import { useState } from "react"
import { Col } from "react-bootstrap";

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

    const onFormUpdate = (atr, value) => {
        setFormDetails({
            ...form,
            [atr]: value
        })
    }

    const submit = () => {

    }

    return (
        <section className="contact" id="contact">
            <Row className="align-items-center">
                <Col md={6}>
                    <img src="" />
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
                                <button type="submit" 
                                    class="g-recaptcha"
                                    data-sitekey="reCAPTCHA_site_key"
                                    data-callback='onSubmit'
                                    data-action='submit'>
                                    <span>
                                        {buttonText}
                                    </span>
                                </button>
                            </Col>
                            {
                                status.message &&
                                <Col>
                                    <p className={status.success === false ? "danger" : success}>
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