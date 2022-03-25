import React, { Component } from 'react'

export default class Panel extends Component {
  render() {
    const {label, value } = this.props;
    console.log("label: ", label, "value: ", value)

    return (
      <section 
        className="dashboard__panel"
      >
        <h1 className="dashboard__panel-header">{label}</h1>
        <h1 className="dashboard__panel- value">{value}</h1>

      </section>
    )
  }
}
