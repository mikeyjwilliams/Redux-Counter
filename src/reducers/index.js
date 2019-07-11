import { INCREMENT, DECREMENT } from '../actions';
import { breakStatement } from '@babel/types';

const initialState = {
  count: 0
};

// Our reducer that handles our two action cases:
// increment and decrement. It receives the state
// of our redux store, along with an action created
// by our action creator. What does the reducer
// need to do with the count in each case?
export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      // Fill in the body of this case
      const newCount = state.count + 1;
      return {
        count: newCount
      };

    case DECREMENT:
      // Fill in the body of this case
      const minusCount = state.count - 1;
      return {
        count: minusCount
      };
    default:
      return state;
  }
};
