import {createStore, applyMiddleware} from 'redux'
import reducer from './reducer';
import createSagaMiddleWare from 'redux-saga'
// import watchSaga from './saga';
import watchSaga from './saga-every';

const SagaMiddleWare = createSagaMiddleWare()
const store = createStore(reducer, applyMiddleware(SagaMiddleWare));

SagaMiddleWare.run(watchSaga) // saga任务，
export default store;