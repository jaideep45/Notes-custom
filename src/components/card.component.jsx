
class Card extends React.Component{
    constructor(props) {
        super(props);
    }
    
    render() {
        return (     
            <div className = "card">
                <div className = "cardHead">
                    <div className = "Heading">
                        {this.props.details.heading}
                    </div>
                    <div className = "tag" style={{backgroundColor:this.props.details.color}}>
                        <div className="text">{this.props.details.tag}</div>
                    </div>
                </div>
                <div className = "cardBody">
                    <div className = "cardOverlay"></div>
                    {this.props.details.body}
                </div>
            </div>);
    }
}