import React from 'react'
import './sidebar.component.scss'
import SbClickable from './sb_clickable.component.jsx'

class Sidebar extends React.Component{
    constructor(props) {
        super(props);
        this.state = {selected: 'default'};
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick = clicked =>{
        this.setState({selected :clicked});
    }

    render() {
        return (
          <div className = "sidebar">
              <div className="header">Notes</div>
              <div className="divider">CATEGORIES</div>
              <div>
                    <SbClickable color="white" text="All" category = "All" selected={this.state.selected} handler ={this.handleClick}/>
                    <SbClickable color="#ff595eff" text="Work" category = "Work" selected={this.state.selected} handler ={this.handleClick}/>
                    <SbClickable color="#ffca3aff" text="Home" category = "Home" selected={this.state.selected} handler ={this.handleClick}/>
              </div>
          </div>
        );
      }
}

export default Sidebar;