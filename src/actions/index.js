import { createAction } from "redux-act"

export const voteAngular = createAction("VOTE_ANGULAR")
export const voteReact = createAction("VOTE_REACT")
export const voteVuejs = createAction("VOTE_VUEJS")

export const voteReactAsync = createAction("VOTE_REACT_ASYNC")
export const voteVueAsync = createAction("VOTE_VUE_ASYNC")
export const asyncError = createAction("ASYNC_ERROR")