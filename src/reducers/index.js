import { createReducer } from "redux-act"
import {
  voteAngular,
  voteReactAsync,
  voteVueAsync,
  asyncError,
} from "../actions"

const reducer = createReducer(
  {
    [voteAngular]: (state, payload) => ({
      ...state,
      angular: state.angular + 1,
    }),
    [voteReactAsync]: (state, payload) => ({
      ...state,
      react: state.react + 1,
    }),
    [voteVueAsync]: (state, payload) => ({ ...state, vuejs: state.vuejs + 1 }),
    [asyncError]: state => state,
  },
  {
    angular: 0,
    react: 0,
    vuejs: 0,
  },
)

export default reducer
