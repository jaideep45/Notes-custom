import React from 'react'
import './main.component.scss'
// import Card from './card.component.jsx'

class Main extends React.Component{
    constructor(props) {
        super(props);
        this.state = {type:this.props.type ,category:"main", details:{color:"#ff595eff",heading: "List of Reminders",tag: "Home",body: 'Your content will need to be the container to  put the page in. The values here are my test to  see if I am correct in this. If your width and  height exceeds the values you set for content,  the scroll bars will appear.',"date": "12 Apr 20"} };    
    }

    render() {
        if (this.props.type === "list"){
            var items = this.props.all_items;
            var l_type = this.props.list_type;
            var items_l = items.filter((item)=>{if ((l_type == 'All') || (l_type === item.category.name)){return true;}else{return false}});

            var note_list = items_l.reverse().map((data)=><Card details = {data} />);
            return (
                <div className = "grid">
                    {note_list}
                </div>
            );
        }
        else if(this.props.type === "write"){
            return(
                <Edit type="write" saveHandler = {this.props.saveHandler} onClose={this.props.onClose}/>
            );
        }
    }
}

class Card extends React.Component{
    constructor(props) {
        super(props);
    }
    
    render() {
        var date = new Date(this.props.details.date);
        var years = date.getFullYear();
        var month = date.getMonth();
        var day = date.getDate();
        var date_m = day + "-" + month + "-" + years;
        return (     
            <div className = "card">
                <div className = "cardHead">
                    <div className = "Heading">
                        {this.props.details.title}
                    </div>
                    <div className = "tag" style={{backgroundColor:this.props.details.category.color}}>
                        <div className="text">{this.props.details.category.name}</div>
                    </div>
                </div><div className = "date"> {date_m} </div>
                <div className = "cardBody">
                    <div className = "cardOverlay"></div>
                    {this.props.details.note}
                </div></div>);
    }
}

class Edit extends React.Component{
    constructor(props) {
        super(props);
        this.state = {category:{name:"All",color:"white"}};
        this.onSelectCategory = this.onSelectCategory.bind(this);
        this.onSave = this.onSave.bind(this);
        this.headingRef = React.createRef();
        this.bodyRef = React.createRef();
    }
    onSelectCategory = (cate) =>{
        this.setState({category:cate});
    }
    onSave = () =>{
        var title = this.headingRef.current.value;
        var note = this.bodyRef.current.value;
        var category = this.state.category;
        var details = {'title':title,'note':note,'category':category}
        if (title != "" && note!= ""){
            this.props.saveHandler(details);
        }
        

    }
    
    render() {
        if (this.props.type === "write"){
            return (<div className="write">
                <div className="topBar">
                    <div className = "close" onClick={this.props.onClose}></div>
                    <div className = "headingArea">
                        <input className = "headingInput" type="text" name="Title" placeholder="Title" ref = {this.headingRef}/>
                        <div className ='searchLine'></div>
                    </div>
                    <div className = "categorySelect">
                        <div className="category">
                            <div className = "circleBase" style={{backgroundColor:this.state.category.color}}></div>
                            <div className = "text">{this.state.category.name}</div>
                            <div className = "arrow"></div>
                        </div>
                        <div className = "categories">
                            <div className = "divider-select"></div>
                            <Category category = {{"name":"All","color":"white"}} handler = {this.onSelectCategory}/>
                            <Category category = {{"name":"Reminders","color":"#5fabce"}} handler = {this.onSelectCategory}/>
                            <Category category = {{"name":"Work","color":"#ff595eff"}} handler = {this.onSelectCategory}/>
                            <Category category = {{"name":"Home","color":"#eecb79"}} handler = {this.onSelectCategory}/>
                            
                        </div>
                    </div>
                    <div className = "save" onClick = {this.onSave}><div className="text">save</div></div>
                </div>
                <textarea className = "bodyInput" type="text" name="body" placeholder="What's on your mind?" ref = {this.bodyRef}/>
            </div>);
        }
        
    }
}

class Category extends React.Component{
        constructor(props){
            super(props);
            this.select_category = this.select_category.bind(this);
        }
        select_category = ()=>{
            this.props.handler(this.props.category);
        }
        
        render(){
        return(
            <div className="category" onClick={this.select_category}>
                <div className = "circleBase" style={{backgroundColor:this.props.category.color}}></div>
                <div className = "text">{this.props.category.name}</div>
            </div>
        );
    }
}

export default Main;