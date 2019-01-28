
// export interface IGlobalActions {
//   fetchPosts: string,
// }

// export const fetchPosts = () => {
//   return {
//     type: 'FETCH_POSTS'
//   }
// }

export interface IFetchPostReturn {
  type: string
}

export interface IGlobalActions {
  fetchPosts: () => IFetchPostReturn,
}

export const fetchPosts = (): IFetchPostReturn => {
  return {
    type: 'FETCH_POSTS'
  }
}