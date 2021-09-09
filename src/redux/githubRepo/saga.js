import { all, call, put, select, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import swal from 'sweetalert'
import * as types from '../types';
import Config from '../config';
import Endpoint from '../endpoint';

const getMenuAstraQuest = (state) => state.Github

export function* fetchData() {
    try {
        const state = yield select(getMenuAstraQuest)
        const data = yield call(function () {
            return axios.get(Config.BASE_URL +'users/' + state.userGit +  Endpoint.GET_REPO)
                .then((res) => {
                    if (res.data.length > 0) return res.data
                    else swal("Oops!", state.userGit + " don't have any repository");
                })
                .catch((err) => {
                    swal(err.message, "Can not find username " + state.userGit);
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