import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer';

export default (initialState = {}) => {
  const middleware = [thunk];
  const middlewareEnhancer = applyMiddleware(...middleware);
  const enhancers = [];
  
  const enhancer = compose(
    middlewareEnhancer,
    //for other enhancers if any
    ...enhancers
  )

  const store = createStore(
    rootReducer,
    initialState,
    enhancer
  );

  return { store };
}