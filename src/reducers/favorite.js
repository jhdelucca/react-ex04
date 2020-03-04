import { SET_FAVORITE } from "../action/favoriteActions"

const initialState = {
    fav: false
};

export const favorite = (state = initialState, action) => {
    switch (action.type) {
        case SET_FAVORITE:
            return {
                ...state,
                fav: action.payload
            };
        default:
            return state;
    }
};