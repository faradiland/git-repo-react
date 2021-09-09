import * as types from '../types'

export function fetchPosts(value) {
  return {
    type: types.FETCH_REPO,
    value
  }
}
export function handleState(field, value) {
  return ({ 
    type: types.HANDLE_STATE, 
    field, 
    value 
  })
}
// export function handleState(property, value) {
//   return (dispatch, getState) => {
//     dispatch({ type: types.HANDLE_STATE, value: value, field: property });
//   };
// }