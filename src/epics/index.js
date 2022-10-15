import { of } from "rxjs"
import { catchError, switchMap, tap, map, delay } from "rxjs/operators"
import { ajax } from "rxjs/ajax"
import { combineEpics, ofType } from "redux-observable"

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
    ofType(voteReact.getType()),
    tap(console.log),
    delay(2000),
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
    ofType(voteVuejs().type),
    tap(() => console.log("this request will fail")),
    delay(2000),
    switchMap(() =>
      ajax.getJSON("https://opentdbasd.com/api.php?amount=1").pipe(
        map(voteVueAsync),
        catchError(error => of(asyncError())),
      ),
    ),
  )

const combinedEpics = combineEpics(reactjsEpic, vuejsEpic)

export default combinedEpics
