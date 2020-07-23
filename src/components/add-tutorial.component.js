import React, { Component } from "react";
import TutorialDataService from "../services/tutorial.service";
import "../App";
export default class AddTutorial extends Component {  
constructor(props) {
    super(props);    
    this.onChangedob = this.onChangedob.bind(this);
    this.onChangeName=this.onChangeName.bind(this);
    this.saveTutorial = this.saveTutorial.bind(this);
    this.newTutorial = this.newTutorial.bind(this);
    this.OnChangeclasses =this.OnChangeclasses.bind(this);
    this.OnChangedivision=this.OnChangedivision.bind(this);
    this.OnChangegender=this.OnChangegender.bind(this);
    this.refreshPage=this.refreshPage.bind(this); 
    this.Componentfetchdata=this.Componentfetchdata.bind(this);
    this.state = {
      studentdata:[],
     id:null,
      name:"", 
      dob:"",
      classes:"",
      division:"",
      gender:"",
      gender:"",
      hasError:false,
      hasdd:false,
      hassubmit:false,
      submission:true,
      submitted: false,
  };
}
onChangeName(e){
  this.setState({
    name: e.target.value
  }); 
}      
OnChangeclasses(e){
  this.setState({
    classes:e.target.value
  })
}
OnChangedivision(e){
  this.setState({
    division:e.target.value
  })
}
onChangedob(e) {
  this.setState({
    dob: e.target.value
    });
}
OnChangegender(e) {
  this.setState({
    gender: e.target.value
  });
} 
saveTutorial() {
  console.log(this.state)
  var data = {
      name: this.state.name,
      dob: this.state.dob,
      classes:this.state.classes,
      division:this.state.division,
      gender:this.state.gender
  };
  if(this.state.name.match(/^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/)){
      TutorialDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          name: response.data.name,
          dob: response.data.dob,
          classes:response.data.classes,
          division:response.data.division,
          gender:response.data.gender,          
          submitted: true,                    
        }); 
      console.log(response.data)     
      })    
      .catch(e=> {
      console.log(e);       
      });
      this.setState({hasError:false});
      this.setState({hasdd:true}); 
      
      // Popup.alert("data saved successfully");
    }else{    
      this.setState({hasError:true});
      this.setState({hasdd:false});
      window.location.reload();    

    }
}
refreshPage() {
  window.location.reload(false);
}
Componentfetchdata(){
  TutorialDataService.getAll()
  .then(response => {
  this.setState({
    studentdata: response.data,
  });
  console.log(response.data);
})
.catch(e => {
  console.log(e);
});
document.getElementById("data").style.display = "block";
}
newTutorial() {
  this.setState({
  id: null,
  name: "",
  dob: "",
  classes:"",
  division:"",
  gender:"",
  submitted:false 
  });
}      
render() {
return (
<div className="container">
  <div className="row">
     <div className="col-sm-4 form">   
     <div></div>     
        <div className="submit-form">     
           <div>
           {this.state.hasdd && <span><h5 className="errors">Data Saved Successfully</h5></span>}
           {this.state.hassubmit && <span><h5 className="errors">Data Submitted Successfully</h5></span>}
            <div className="form-group">
            {this.state.hasError && <span><p className="error">Invalid Data Entered</p></span>}
              <label htmlFor="name">Name</label>
              <input type="text" className="form-control" id="myInput" name="name" autocomplete="off" required
                  value={this.state.name}
                  onChange={this.onChangeName}/>
                  {this.state.hasError && <span><p className="error">Error Only Characters Accepted</p></span>}
            </div>  
            <div className="form-group">
              <label htmlFor="dob">Date of Birth</label>
              <input type="date" className="form-control" id="myInput" name="dob" autocomplete="off" required
                   value={this.state.dob} pattern="[a-zA-Z0-9\s]+"
                   onChange={this.onChangedob}/>
            </div>            
            <div className="form-group">
               <label htmlFor="class">Class</label>
               <select value={this.state.classes} onChange={this.OnChangeclasses}name="classes" id="myInput" className="sidv" autocomplete="off">             
               <option value="1">1</option>
               <option value="11">11</option>
               <option value="111">111</option>
               <option value="IV">IV</option>
               <option value="V">V</option>
               <option value="V1">V1</option>
               <option value="V11">V11</option>
               <option value="V111">V111</option>
               <option value="IX">IX</option>
               <option value="X">X</option>
               <option value="X1">X1</option>
               <option value="X11">X11</option>
               </select> 
               <label htmlFor="class" className="sidv">Division</label>
               <select id="division" name="division" onChange={this.OnChangedivision} value={this.state.division} className="sidv" autocomplete="off">
               <option value="A">A</option>
               <option value="B">B</option>
               <option value="C">C</option>
               </select>
            </div>              
            <div className="form-group">  
              <div id="gender" name="gender" onChange={this.OnChangegender} value={this.state.gender}>
              <input type="radio"name="gender" value="Male"/>Male
              <input type="radio" name="gender" value="Female" className="sidv"/>Female             
              </div>
            </div>  
        <button onClick={()=> {this.saveTutorial();this.refreshPage();}} className="btn btn-success" >Submit</button>
        <button onClick={this.Componentfetchdata} className="btn btn-success sidv">View</button> 
       </div>        
      </div>
    </div>
    <div className="col-sm-8">      
       <table className="table data liDa" id="data">
          <thead>
              <tr><th colSpan="7" className="desc">STUDENT DETAILS</th></tr>
              <tr>               
                <th>Roll Number</th>
                <th>Name</th>
                <th>Date of Birth</th>
                <th>Class</th>
                <th>Division</th>
                <th>Gender</th>
              </tr>
          </thead>
          <tbody>
          {this.state.studentdata.map(student=>
              <tr>             
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.dob}</td>
                <td>{student.classes}</td>
                <td>{student.division}</td>
                <td>{student.gender}</td>            
              </tr>
          )}
          </tbody>                                   
        </table>
    </div>
  </div>
</div>   
)}
}