import React from'react'
import Sidebar from './sidebar.component.jsx'
import Main from './main.component.jsx'
import Firebase from './firebase.js';
import 'firebase/auth'


class Control extends React.Component{
    constructor(props){
        super(props);
        this.database = Firebase.database();
        this.onSave = this.onSave.bind(this);
        this.state = {selected:{name:"None",color:"None"},all_details:{},main:"write",list_type:"None"}
        this.fetch = this.fetch.bind(this);
        this.onAdd = this.onAdd.bind(this); 
        this.onSelectCategory = this.onSelectCategory.bind(this);
        this.fetch();
    }
    fetch = ()=>{
        var notes = this.database.ref('notes/').orderByKey();
        var details = [];
        notes.once("value", function(snapshot) {
            snapshot.forEach(function (childSnap) {
                details.push(childSnap.val());
               });
        }, function (errorObject) {
            console.log("The read failed: " + errorObject.code);
        });

        this.all_details = details;
        this.setState({selected:"All",all_details:this.all_details,main:"list",list_type:"All"});
    }
    onSave = details => {
        this.database.ref('/notes/'+Date()).set({title:details.title,note:details.note,date:Date(),category:details.category});
        this.fetch();
    }
    onSelectCategory = category=>{
        this.setState({selected:category,all_details:this.all_details,main:"list",list_type:category});
    }
    onAdd =()=>{
        this.setState({selected:{name:"None",color:"None"},all_details:{},main:"write",list_type:"None"});
    }
    onClose= ()=>{
        this.setState({selected:"All",all_details:this.all_details,main:"list",list_type:"All"});
    }

    

    render(){
        console.log(this.all_details);
        return(
            <div className="App">
                <Sidebar selected = {this.state.selected} selectHandler = {this.onSelectCategory} onAdd = {this.onAdd}/>
                <Main type = {this.state.main} all_items={this.state.all_details} list_type={this.state.list_type} saveHandler = {this.onSave} onClose={this.onClose}/>
            </div>
        );
    }
}

export default Control;