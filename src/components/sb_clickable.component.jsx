import React from 'react'
import './sb_clickable.component.scss'

class SbClickable extends React.Component{
    constructor(props) {
        super(props);
        this.state = {background:(this.props.selected === this.props.category ? '#565656' :'transparant')};
        this.click_category = this.click_category.bind(this);
        this.background = this.background.bind(this);
    }
    click_category = () =>{
        this.props.handler(this.props.category);
    }
    background = () => {
        return (this.props.selected === this.props.category ? "#565656" : "transparent");
    }
    render() {
        return (
        <div className = "SbClickable" onClick = {this.click_category} style= {{backgroundColor:this.background()}}>
            <div className = "circleBase" style={{backgroundColor:this.props.color}}></div>
            <div className = "text">{this.props.text}</div>
        </div>
        );
      }
}

export default SbClickable;