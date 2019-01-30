import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceholder.get('/posts');
    console.log(response);

    dispatch ({
      type: 'FETCH_POSTS',
      payload: response
    });
  };




// export interface IFetchPostReturn {
//   type: string
// }

// export interface IGlobalActions {
//   fetchPosts: () => IFetchPostReturn,
// }

// export const fetchPosts = (): IFetchPostReturn => {
//   return {
//     type: 'FETCH_POSTS'
//   }
// }