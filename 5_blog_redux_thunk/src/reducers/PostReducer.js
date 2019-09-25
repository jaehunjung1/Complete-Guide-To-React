export default (state = [], action) => {
  // you may want to use `import _ from 'lodash'`
  // e.g. const copiedState = _.cloneDeep(state)

  switch (action.type) {
    case 'FETCH_POSTS':
      return action.payload;
    default:
      return state;
  }
};