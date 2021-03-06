import {
    FETCH_CARS_SUCCEEDED,
    FETCH_CARS_REQUESTED,
    SORT_CAR
} from '../../actions/car';

import orderBy from 'lodash/orderBy';

const initialState = {
    loading: false,
    cars: []
};

export default (state = initialState, action) => {
    switch(action.type) {
        case FETCH_CARS_REQUESTED:
            return {...state, loading: true};
        case FETCH_CARS_SUCCEEDED:
            return {...state, loading: false, cars: action.cars};
        case SORT_CAR:
            return {
                ...state,
                loading: false,
                cars: orderBy(state.cars,
                    [action.sort.id],
                    [action.sort.sort]
                )
            };
        default:
            return state;
    }
}