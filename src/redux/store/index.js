import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import { authReducer, eventReducer, searchReducer } from '../Reducers';

const reducers = combineReducers({
    authUser: authReducer,
    events: eventReducer,
    search: searchReducer
});

const initialState = {};

const middleware = [thunk];

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

const store = createStore(
    reducers,
    initialState,
    compose(composeEnhancers(applyMiddleware(...middleware)))

)

export default store; 