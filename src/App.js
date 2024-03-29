import React, { Fragment } from "react"
import "./App.css"
import { voteAngular, voteReact, voteVuejs } from "./actions"
import { connect } from "react-redux"
import Results from "./components/results"

function App(props) {
  // the payloads for actions are just to show what kind of payloads actions can take
  // they have no other use for this application
  const handleVoteAngular = () => {
    props.voteAngular({ name: "angular", good: false })
  }
  const handleVoteReact = () => {
    props.voteReact("voting for react!")
  }
  const handleVoteVuejs = () => {
    props.voteVuejs()
  }
  return (
    <Fragment>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h2>What is your favorite front-end development framework 2017?</h2>
          <h4>Click on the logos below to vote!</h4>
          <br />
          <span onClick={handleVoteAngular}>angular</span>
          <span onClick={handleVoteReact}>react</span>
          <span onClick={handleVoteVuejs}>vue</span>
        </div>
      </div>
      <hr />
      <Results />
      <hr />
      {props.votingInProgress && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          Voting in progress...
        </div>
      )}
    </Fragment>
  )
}
export default connect(
  state => ({ votingInProgress: state.votingInProgress }),
  {
    voteAngular,
    voteReact,
    voteVuejs,
  },
)(App)
