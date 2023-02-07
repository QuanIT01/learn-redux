import { call, put, select } from "redux-saga/effects";
import { setLoading, setNews } from "./newsSlice";
import requestGetNews from "./requests";

export default function* handleGetNews({ payload, type }) {
  let query = "";
  try {
    const newsQuery = yield select((state) => state.news.query);
    if (newsQuery === "") query = "react";
    else query = payload;
    yield put(setLoading(true));
    const respone = yield call(requestGetNews, query);
    const { hits } = respone.data;
    yield put(setNews(hits));
    yield put(setLoading(false));
  } catch (error) {
    console.log(error);
  }
}
