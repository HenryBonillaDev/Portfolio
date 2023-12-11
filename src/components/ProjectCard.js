import { Col } from "react-bootstrap"

export const ProjectCard = ({ title, desc, imgUrl }) => {
    return (
        <Col sm={6} md={4}>
            <div className="proj-imgbox">
                <img src={imgUrl} alt="Imagen de viaualización del proyecto" />
            </div>
            <div className="proj-txt">
                <h4>
                    {title}
                </h4>
                <span>
                    {desc}
                </span>
            </div>
        </Col>
    )
}