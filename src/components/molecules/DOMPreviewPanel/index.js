import React from "react";
import { Row, Col } from "react-bootstrap";

import style from "./DOMPreview.module.scss";
import SiteImage from "@atoms/siteImage";
import Title from "@atoms/title";

const DOMPreviewPanel = ({ title, image, description, bottomURL }) => {
    console.log(description);

    return (
        <>
            <Row>
                <Col>
                    <SiteImage src={image} altText={""} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Title size="medium" text={title} />
                </Col>
            </Row>
            <Row>
                <Col>{description}</Col>
            </Row>
            <Row>
                <Col className={style.url}>{bottomURL}</Col>
            </Row>
        </>
    );
};

export default DOMPreviewPanel;
