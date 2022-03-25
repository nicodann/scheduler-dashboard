import React, { Component } from 'react'

export default class Panel extends Component {
  render() {
    const { id, label, value, onSelect } = this.props;
    console.log("label: ", label, "value: ", value)

    return (
      <section 
        className="dashboard__panel"
        onClick={onSelect}
      >
        <h1 className="dashboard__panel-header">{label}</h1>
        <h1 className="dashboard__panel- value">{value}</h1>

      </section>
    )
  }
}
