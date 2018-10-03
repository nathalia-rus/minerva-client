import * as auth from '../../actions/actionTypes';


const initialState = {
    loading: false,
    finished: false,
};


export default (state=initialState, action) => {
    switch(action.type) {
    case auth.REGISTER_USER_REQUEST:
        return {
            ...state,
            loading: true,
            finished: false,
        };
    case auth.REGISTER_USER_SUCCESS:
        return {
            ...state,
            loading: false,
            finished: true,
        };
    case auth.REGISTER_USER_FAILURE:
        return {
            ...state,
            loading: false,
            finished: false,
        };
    default:
        return state;
    }
};
