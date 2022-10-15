import React, { Component } from "react"
import { connect } from "react-redux"

class Results extends Component {
  votesAngularInPercent() {
    if (this.props.angular) {
      return (
        (this.props.angular /
          (this.props.angular + this.props.react + this.props.vuejs)) *
        100
      )
    } else {
      return 0
    }
  }
  votesReactInPercent() {
    if (this.props.react) {
      return (
        (this.props.react /
          (this.props.angular + this.props.react + this.props.vuejs)) *
        100
      )
    } else {
      return 0
    }
  }
  votesVuejsInPercent() {
    if (this.props.vuejs) {
      return (
        (this.props.vuejs /
          (this.props.angular + this.props.react + this.props.vuejs)) *
        100
      )
    } else {
      return 0
    }
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <span style={{ margin: "4px 0" }}>
          Angular: {this.votesAngularInPercent().toFixed(2) + "%"}
        </span>
        <span style={{ margin: "4px 0" }}>
          React: {this.votesReactInPercent().toFixed(2) + "%"}
        </span>
        <span style={{ margin: "4px 0" }}>
          Vue.js: {this.votesVuejsInPercent().toFixed(2) + "%"}
        </span>
      </div>
    )
  }
}
export default connect(state => ({
  react: state.react,
  angular: state.angular,
  vuejs: state.vuejs,
}))(Results)
