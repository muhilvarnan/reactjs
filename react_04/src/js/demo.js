import { applyMiddleware, combineReducers, createStore } from "redux";
import axios from "axios";
import logger from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

/*
SIngle Reducer
*/
/*
const reducer = function(state, action	) {
	if(action.type=="INC") {
		return state+action.payload;
	}

	if(action.type=="DEC") {
		return state-action.payload;
	}

	return state;
}

const store = createStore(reducer, 0);

store.subscribe(() => {
	console.log("store changed", store.getState());
});

store.dispatch({type:"INC", payload:10}); 
store.dispatch({type:"DEC", payload:5});
*/

/*
Multiple Reducer
*/
/*
const userReducer = (state={}, action) => {
	switch(action.type) {
		case "CHANGE_NAME": {
			state = {...state, name:action.payload.name}
			break;
		}
		case "CHANGE_AGE": {
			state = {...state, age:action.payload.age}
			break;
		}
	}
	return state
}

const tweetReducer = (state=[], action) => {
	return state
}


const reducers = combineReducers({
	user: userReducer,
	tweet: tweetReducer
});

const multiReducerstore = createStore(reducers);

multiReducerstore.subscribe(() => {
	console.log("store changed", multiReducerstore.getState());
});

multiReducerstore.dispatch({type:"CHANGE_NAME", payload:{name: "muhil"}}); 
multiReducerstore.dispatch({type:"CHANGE_AGE", payload:{age:35}});

*/
/**
Middle Ware
**/
/*
const numberReducer = function(state, action	) {
	if(action.type=="INC") {
		return state+action.payload;
	}

	if(action.type=="DEC") {
		return state-action.payload;
	}
	if(action.type=="E") {
		throw new Error("AHHH");
	}

	return state;
}

const customLogger = (store) => (next) => (action) => {
	console.log("action fired", action);
	next(action);
}

const error = (store) => (next) => (action) => {
	try{
		next(action);
	} catch(e) {
		console.log("AHHH!", e)
	}
}
 
const middleware = applyMiddleware(customLogger 	, error);

const middlewarestore = createStore(numberReducer, 0, middleware);

middlewarestore.subscribe(() => {
	console.log("store changed", middlewarestore.getState());
});

middlewarestore.dispatch({type:"INC", payload:10}); 
middlewarestore.dispatch({type:"DEC", payload:5});
middlewarestore.dispatch({type:"E", payload:5});
*/
/**
Async actions
**/

const initialState = {
	fetching: false,
	fetched: false,
	users: [],
	error: null
}

const asyncReducer = (state=initialState, action) => {
	switch(action.type){
		case "FETCH_USER_PENDING": {
			return {...state, fetching:true}
			break;
		}
		case "FETCH_USER_FULLFILLED": {
			return {...state, fetching:false, fetched:false, users: action.payload}
			break;	
		}
		case "FETCH_USER_REJECTED": {
			return {...state, fetching: false, error: action.payload	}
			break;
		}
	}
	return state;
}

const ayncMiddleware = applyMiddleware(promise(), thunk, logger());
const asyncStore = createStore(asyncReducer, ayncMiddleware);
console.log(asyncStore);

asyncStore.dispatch((dispatch) => {
	dispatch({type:"FETCH_USER_PENDING"});
	axios.get("http://rest.learncode.academy/api/wstern/users").
	then((response) => {
		dispatch({type:"FETCH_USER_FULLFILLED", payload: response.data})
	}).catch((err) => {
		dispatch({type:"FETCH_USER_REJECTED", payload:err})
	});
});

asyncStore.dispatch({
	type:"FETCH_USER",
	payload:axios.get("http://rest.learncode.academy/api/wstern/users") 
})