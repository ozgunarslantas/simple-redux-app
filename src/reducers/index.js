import { createReducer } from "redux-act"
import {
  voteAngular,
  voteReactAsync,
  voteReact,
  voteVueAsync,
  voteVuejs,
  asyncError,
  votingFinished,
} from "../actions"

const reducer = createReducer(
  {
    [voteAngular]: (state, payload) => ({
      ...state,
      angular: state.angular + 1,
    }),
    [voteReact]: (state, payload) => ({
      ...state,
      votingInProgress: true,
    }),
    [voteReactAsync]: (state, payload) => ({
      ...state,
      react: state.react + 1,
      votingInProgress: false,
    }),
    [voteVueAsync]: (state, payload) => ({
      ...state,
      vuejs: state.vuejs + 1,
      votingInProgress: false,
    }),
    [voteVuejs]: (state, payload) => ({ ...state, votingInProgress: true }),
    [asyncError]: state => ({ ...state, votingInProgress: false }),
    [votingFinished]: state => ({ ...state, votingInProgress: false }),
  },
  {
    angular: 0,
    react: 0,
    vuejs: 0,
    votingInProgress: false,
  },
)

export default reducer
