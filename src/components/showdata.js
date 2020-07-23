import React, { Component } from "react";
import TutorialDataService from "../services/tutorial.service";
import "bootstrap/dist/css/bootstrap.min.css";
import AddTutorial from"../components/showdata";
export default class ListData extends Component{
     constructor(pros){
         super(pros)
         this.Componentfetchdata=this.Componentfetchdata.bind(this);     
    this.state={
        studentdata:[],
    }
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
    render() {
        return (          
            <div>
                 <button onClick={this.Componentfetchdata} className="btn btn-success">ShowStudentData</button>  
                 <div className="container">
                 <div className="row">
                 <div className="col-sm-12">              
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
</div>
        );
      }   
}  