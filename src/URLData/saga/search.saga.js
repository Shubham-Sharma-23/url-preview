import { takeLatest, call, put } from "redux-saga/effects";

import { FETCH_DOM_DATA, FETCH_DOM_DATA_ERROR, FETCH_DOM_DATA_SUCCESS } from "../actions";
import { fetchPreviewData } from "../../service/apiService";

function* dataFetcher(action) {
    try {
        const data = yield call(fetchPreviewData, action.data); //api
        yield put({ type: FETCH_DOM_DATA_SUCCESS, payload: data });
    } catch (error) {
        yield put({ type: FETCH_DOM_DATA_ERROR });
    }
}

export default function* dataFetchingSaga() {
    yield takeLatest(FETCH_DOM_DATA, dataFetcher);
}
