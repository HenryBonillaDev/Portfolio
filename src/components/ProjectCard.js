import { Col } from "react-bootstrap"

export const ProjectCard = ({ title, desc, imgUrl }) => {
    return (
        <Col sm={6} md={4}>
            <div className="proj-imgbox">
                <img src={imgUrl} alt={title}/>
                <div className="proj-txt">
                    <h4>
                        {title}
                    </h4>
                    <span>
                        {desc}
                    </span>
                </div>
            </div>

        </Col>
    )
}