import React, { Component } from "react";
import CourseDet from "./CourseDet";
import SearchForm from "./SearchForm";
import Axios from "axios";

class SearchTitle extends Component {
  state = {
    search: "",
    result: []
  };
  searchCourseTitle = async () => {
    try {
      const url = `http://localhost:8080/searchtitle/${this.state.search}`;
      const response = await Axios.get(url);
      console.log();
      this.setState({
        result: response.data
      });
      console.log(typeof this.state.result);
    } catch (error) {
      console.log(error);
    }
  };
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchCourseTitle(this.state.search);
    console.log(this.state.search);
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="container">
            <SearchForm
              value={this.state.search}
              handleInputChange={this.handleInputChange}
              handleFormSubmit={this.handleFormSubmit}
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div>
              {this.state.result.map((resultobj, index) => (
                <CourseDet
                  key={index}
                  Title={resultobj.courseName}
                  Start={resultobj.startdate}
                  End={resultobj.enddate}
                  Seats={resultobj.availableseats}
                  level={resultobj.level}
                  prereqs={resultobj.prereq}
                  Instructor={resultobj.prof_id}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchTitle;
