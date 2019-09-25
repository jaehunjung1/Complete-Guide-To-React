import _ from 'lodash';

import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPosts = () => {
  return async dispatch => {
    const response = await jsonPlaceholder.get('/posts');

    dispatch({
      type: 'FETCH_POSTS',
      payload: response.data
    });
  };
};

export const fetchUser = userId => async dispatch => {
  const response = await jsonPlaceholder.get(`/users/${userId}`);

  dispatch({
    type: 'FETCH_USER',
    payload: response.data
  });
};

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts()); // wait until that post api request has been completed.
  // posts => postReducer를 통해 전처리된 형태 / lodash.map: posts 중 userId만 가져옴.
  const userIds = _.uniq(_.map(getState().posts, 'userId'));

  userIds.forEach(id => dispatch(fetchUser(id)));

  // equal code with above two statements
  // _.chain(getState().posts)
  //   .map('userId')
  //   .uniq()
  //   .forEach(id => dispatch(fetchUser(id)))
  //   .value(); // execute
};


// to use below code, change usage of fetchPostsAndUsers to fetchPosts and fetchUser
// export const fetchUser = (userId) => (dispatch) => {
//   _fetchUser(userId, dispatch);
// };
//
// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonPlaceholder.get(`/users/${id}`);
//
//   dispatch({
//     type: 'FETCH_USER',
//     payload: response.data
//   });
// });