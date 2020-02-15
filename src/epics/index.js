import { of } from "rxjs"
import { catchError, switchMap, tap, map } from "rxjs/operators"
import { ajax } from "rxjs/ajax"
import { ofType } from "redux-observable"
import { combineEpics } from "redux-observable"

import {
  voteReact,
  voteReactAsync,
  voteVuejs,
  voteVueAsync,
  asyncError,
} from "../actions"

const reactjsEpic = action$ =>
  action$.pipe(
    // both x().type and x.getType() works
    // ofType(voteReact().type),
    ofType(voteReact.getType()),
    tap(console.log),
    switchMap(({ payload }) => {
      console.log(payload)
      return ajax.getJSON("https://opentdb.com/api.php?amount=1").pipe(
        map(voteReactAsync),
        catchError(error => of(asyncError())),
      )
    }),
  )

const vuejsEpic = action$ =>
  action$.pipe(
    // both x().type and x.getType() works
    // ofType(voteReact().type),
    ofType(voteVuejs().type),
    switchMap(({ payload }) =>
      ajax.getJSON("https://opentdbasd.com/api.php?amount=1").pipe(
        map(voteVueAsync),
        catchError(error => of(asyncError())),
      ),
    ),
  )

const combinedEpics = combineEpics(reactjsEpic, vuejsEpic)

export default combinedEpics
