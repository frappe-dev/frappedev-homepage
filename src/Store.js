import { createStore, combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import BlogReducer from './reducers/BlogReducer';

const reducer = combineReducers({
  form: reduxFormReducer,
  todoList: BlogReducer,
});

const store = createStore(
    reducer,
    process.env.NODE_ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
