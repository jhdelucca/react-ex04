import { SET_FAVORITE, DELETE_FAVORITIES, INCREMENT_FAVORITE } from "../action/favoriteActions"

const initialState = {
    listFav: [],
    
    
};

export const favorite = (state = initialState, action) => {
    switch (action.type) {
        
        case INCREMENT_FAVORITE:
            return {
                ...state,
                listFav: state.listFav.concat(action.payload),        
            };
        case DELETE_FAVORITIES:
            return {
                ...state,
                listaFav: state.listFav.filter(function(value){ return value !== action.payload })
                };
        default:
            return state;
    }
};