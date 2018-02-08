import {LOAD_LISTING_DATA, LOAD_LISTING_DATA_SUCCESS, LOAD_LISTING_DATA_ERROR} from '../../constants/index';
import _ from 'lodash';

const initialState = {
    state: [],
    listing_data: [],
    error: null
};

export const listingReducer = (state = initialState, action) => {
    switch (action.type) {

        case LOAD_LISTING_DATA:
            return {
                ...state
            }
        case LOAD_LISTING_DATA_SUCCESS:
            return {
                ...state,
                listing_data: action.listing_data.listingData,
                error: false
            }
        case LOAD_LISTING_DATA_ERROR:
            return {
                ...state,
                error: true
            }
        default:
            return {
                ...state
            }
    }
}