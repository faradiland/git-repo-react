import { all } from 'redux-saga/effects';
import Github from './githubRepo/saga';

export default function* rootSaga(getState) {
    yield all([
        Github()
    ]);
}