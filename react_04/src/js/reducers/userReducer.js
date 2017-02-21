const initialState = {
	fetching: false,
	fetched: false,
	users: [],
	error: null
}

export default (state=initialState, action) => {
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