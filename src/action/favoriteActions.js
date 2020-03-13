export const INCREMENT_FAVORITE = "INCREMENT_FAVORITE"
export const DELETE_FAVORITIES = "DELETE_FAVORITE";

export const incrementFavorite = favorite => ({
    type: INCREMENT_FAVORITE,
    payload: favorite
        
});

export const deleteFavorities = favorite => ({
    type: DELETE_FAVORITIES,
    payload: favorite
  });
  