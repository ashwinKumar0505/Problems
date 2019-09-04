import React, { Component } from "react";
import classes from "./SearchStudent.module.css";
import StudentProfile from "./StudentProfile";
import StudentMark from "./StudentMark";
class SearchStudent extends Component {
  state = {
    names: ["Kameshwaran", "Marudhu", "Arjun"],
    studentDetails: [
      {
        school: "Govt Hr Sec School",
        dateOfBirth: "01-06-1993",
        marks: [
          {
            quarterly: {
              english: 100,
              maths: 80,
              physics: 95,
              chemistry: 98,
              biology: 100,
            },
          },
          {
            halfYearly: {
              english: 90,
              maths: 70,
              physics: 95,
              chemistry: 88,
              biology: 60,
            },
          },
          {
            annual: {
              english: 80,
              maths: 90,
              physics: 95,
              chemistry: 98,
              biology: 99,
            },
          },
        ],
      },

      {
        school: "Govt Hr Sec School",
        dateOfBirth: "01-06-1983",
        marks: [
          {
            quarterly: {
              english: 80,
              maths: 80,
              physics: 95,
              chemistry: 100,
              biology: 100,
            },
          },
          {
            halfYearly: {
              english: 100,
              maths: 70,
              physics: 85,
              chemistry: 88,
              biology: 80,
            },
          },
          {
            annual: {
              english: 100,
              maths: 60,
              physics: 55,
              chemistry: 78,
              biology: 90,
            },
          },
        ],
      },

      {
        school: "Govt Hr Sec School",
        dateOfBirth: "01-06-1993",
        marks: [
          {
            quarterly: {
              english: 90,
              maths: 90,
              physics: 95,
              chemistry: 98,
              biology: 90,
            },
          },
          {
            halfYearly: {
              english: 89,
              maths: 70,
              physics: 65,
              chemistry: 98,
              biology: 70,
            },
          },
          {
            annual: {
              english: 88,
              maths: 98,
              physics: 95,
              chemistry: 98,
              biology: 79,
            },
          },
        ],
      },
    ],
    showMarks: false,
    value: "",
  };
  storeName = event => {
    this.setState({
      value: event.target.value,
      showMarks: false,
    });
  };
  searchPerson = () => {
   
    this.setState({
      showMarks: true,
    });
  };
  enterKeyPress=(event)=>{
    console.log("here")
    if(event.keyCode===13||event.which===13){
      this.searchPerson();
    }
  }
  render() {
    let studentProfile=null;
    if (this.state.showMarks) {
      const name = this.state.value;
      if (this.state.names.includes(name)) {
        let index = this.state.names.indexOf(name);
        studentProfile = (
          <div>
            <StudentProfile
              name={name}
              school={this.state.studentDetails[index].school}
              dob={this.state.studentDetails[index].dateOfBirth}
            />
            <StudentMark
              marks={this.state.studentDetails[index].marks}
              />
          </div>
        );
      } else {
        studentProfile = <h2>Name Not Found</h2>;
      }
    }
    return (
      <div className={classes.StudentDatabase}>
        <h1 className={classes.heading}>Student Mark DataBase</h1>
        <div className={classes.searchDiv}>
          <input
            type="text"
            className={classes.textField}
            placeholder="Enter the Student Name"
            onChange={this.storeName}
            onKeyPress={this.enterKeyPress}
          />
          <input
            type="button"
            className={classes.searchButton}
            value="Search"
            onClick={this.searchPerson}
          />
          {studentProfile}
        </div>
      </div>
    );
  }
}

export default SearchStudent;
