import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SearchModel from "@molecules/SearchModel";
import DOMPreviewPanel from "@molecules/DOMPreviewPanel";

const GenerateNewQuoteForm = () => {
    const [extractedURL, setExtractedURL] = useState("");
    const [domData, setDomData] = useState({});

    useEffect(() => {}, [extractedURL]);

    return (
        <Container>
            <Row>
                <Col>
                    <SearchModel setExtractedURL={setExtractedURL} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <DOMPreviewPanel domData={domData} />
                </Col>
            </Row>
        </Container>
    );
};

export default GenerateNewQuoteForm;
