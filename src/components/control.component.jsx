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
        this.state = {selected:"None",all_details:{},main:"write",main_details:"new"}
        this.fetch = this.fetch.bind(this);
    }
    fetch = ()=>{
        var notes = this.database.ref('notes');
        var details = [];
        notes.on("value", function(snapshot) {
            details.push(snapshot.val());
        }, function (errorObject) {
            console.log("The read failed: " + errorObject.code);
        });
        this.setState({selected:"All",all_details:details,main:"list",main_details:"all"})
    }
    onSave = details => {
        this.database.ref('/notes/'+Date()).set({title:details.title,note:details.note,date:Date(),category:details.category});
        this.fetch();
    }

    

    render(){
        return(
            <div className="App">
                <Sidebar selected = {this.state.selected}/>
                <Main type = {this.state.main} saveHandler = {this.onSave}/>
            </div>
        );
    }
}

export default Control;