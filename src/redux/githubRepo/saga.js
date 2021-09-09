import { all, call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import * as types from '../types';
import Config from '../config';
import Endpoint from '../endpoint';

// const state = state => state.Github;
export function* fetchData() {
    try {
        const data = yield call(function () {
            return axios.get(Config.BASE_URL + Endpoint.GET_REPO)
                .then((res) => {
                    debugger
                    return res.data
                })
                .catch((err) => {
                    return err
                })
        })
        yield put({ type: types.SUCCESS_FETCH_REPO, payload: data })
    } catch (err) {
        console.log("Fail Fetch Data", err)
    }
}

export default function* rootSaga() {
    yield all([
        takeEvery(types.FETCH_REPO, fetchData),
    ])
}