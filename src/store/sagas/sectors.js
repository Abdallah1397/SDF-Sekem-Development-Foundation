import { call, put, takeLatest } from "redux-saga/effects";
import * as api from "../api/sector";
import * as actions from "../actions/sectors";
import Types from "../types/sector";

function* sectors() {
  console.log("asas");
  yield put(actions.setLoading(true));
  try {
    const result = yield call(api.getSectors);
    console.log(result.data,"sectors in saga file");
    yield put (actions.getSectorsSuccess(result.data));
  } catch (error) {
    yield put(actions.getSectorsFail());
  } finally {
    yield put(actions.setLoading(false));
  }
}

export default function* sectorsSaga() {
  yield takeLatest(Types.GET_ALL_SECTORS_REQUEST, sectors);
}
