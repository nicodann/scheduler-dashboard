import React, { Component } from "react";
import Loading from './Loading.jsx'
import Panel from './Panel.jsx'

import classnames from "classnames";

const data = [
  {
    id: 1,
    label: "Total Interviews",
    value: 6
  },
  {
    id: 2,
    label: "Least Popular Time Slot",
    value: "1pm"
  },
  {
    id: 3,
    label: "Most Popular Day",
    value: "Wednesday"
  },
  {
    id: 4,
    label: "Interviews Per Day",
    value: "2.3"
  }
];


class Dashboard extends Component {
  
  state = {
    loading:false,
    focused:null
  }

  selectPanel(id) {
    this.setState({focused: id});
  }
  
  render() {

    const dashboardClasses = classnames("dashboard", {
      "dashboard--focused": this.state.focused
    });

    

    const panels = data
      .filter(
        panel => this.state.focused === null || this.state.focused === panel.id
      )
      .map(panel => 
        <Panel 
          key={panel.id} 
          id= {panel.id} 
          label={panel.label} 
          value={panel.value}
          onSelect={this.selectPanel}
        />
      )
    
    

    if (this.state.loading) {
      return <Loading />;
    }

    return( 
      <main className={dashboardClasses}>
        {panels}
      </main>
    );
  }
}

export default Dashboard;
