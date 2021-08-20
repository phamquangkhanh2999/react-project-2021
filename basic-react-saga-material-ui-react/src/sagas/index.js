import { fork, take } from 'redux-saga/effects';
import * as taskTypes from '../constants/task';

function* watchFectchListTaskAction() {
  yield take(taskTypes.FETCH_TASK);
  console.log('watchFectchListTaskAction');
}
function* watchCreateTaskAction() {
  console.log('watchCreateTaskAction');
}

function* rootSaga() {
  yield fork(watchFectchListTaskAction);
  yield fork(watchCreateTaskAction);
}

export default rootSaga;
