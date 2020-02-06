import { createReducer } from "redux-act"
import { voteAngular, voteReact, voteVuejs } from "../actions"

const reducer = createReducer(
  {
    [voteAngular]: (state, payload) => ({
      ...state,
      angular: state.angular + 1,
    }),
    [voteReact]: (state, payload) => ({ ...state, react: state.react + 1 }),
    [voteVuejs]: (state, payload) => ({ ...state, vuejs: state.vuejs + 1 }),
  },
  {
    angular: 0,
    react: 0,
    vuejs: 0,
  },
)

export default reducer
