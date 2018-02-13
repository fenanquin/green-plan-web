import token from '../../mock-config';

export default (state = {}, action) => {
  switch (action.type) {
    default:
      return {token};
  }
}
