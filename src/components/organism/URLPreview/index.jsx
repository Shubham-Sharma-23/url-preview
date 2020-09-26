import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import useSagaReducer from "use-saga-reducer";
import {isEmpty} from 'lodash';

import SearchModel from "@molecules/SearchModel";
import DOMPreviewPanel from "@molecules/DOMPreviewPanel";

import searchReducer from "../../../URLData/reducers/search.reducer";
import searchSaga from "../../../URLData/saga/search.saga";
import { FETCH_DOM_DATA } from "../../../URLData/actions";

const GenerateNewQuoteForm = () => {
    const [extractedURL, setExtractedURL] = useState("");
    const [domData, dispatch] = useSagaReducer(searchSaga, searchReducer);

    useEffect(() => {
        if (extractedURL) dispatch({ type: FETCH_DOM_DATA, data: extractedURL });
    }, [extractedURL]);

    return (
        <Container className="pt-3">
            <Row>
                <Col>
                    <SearchModel setExtractedURL={setExtractedURL} />
                </Col>
            </Row>
            <Row>
                <Col> 
                    {!isEmpty(domData) && <DOMPreviewPanel {...domData} bottomURL={extractedURL} />}
                </Col>
            </Row>
        </Container>
    );
};

export default GenerateNewQuoteForm;
