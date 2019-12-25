import { call, put, all, takeLatest } from 'redux-saga/effects';
//call é tipo um api.get do axios
//put é tipo um dispatch

import api from '../../../services/api';

import { addToCartSuccess } from './actions';

function* addToCart({ id }) {
    const response = yield call(api.get, `/products/${id}`);

    yield put(addToCartSuccess(response.data));
}

export default all([
    takeLatest('@cart/ADD_REQUEST', addToCart)
]);