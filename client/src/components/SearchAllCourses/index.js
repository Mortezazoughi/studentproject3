import React, { Component } from "react";
import API from "../../utils/API";

class SearchProf extends Component {
  state = {
    AllCourses: [],
    searchAllCourses: ""
  };
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
    console.log(this.state.searchAllCourses);
  };
  searchallcourses = e => {
    API.searchallcourses()
      .then(res => {
        console.log(res.data);
        let whatever = res.data;
        console.log(whatever[1].courseName);
        this.setState({ AllCourses: res.data });
      })
      .catch(err => console.log(err));
  };
  render() {
    return (
      <div>
        {/* <label>Search for All Courses : </label>
        <input
          value={this.state.searchAllCourses}
          name="searchAllCourses"
          placeholder=" Search  all courses"
          onChange={this.handleChange}
          type="text"
          list="courses"
        /> */}
        {this.state.AllCourses.map(eachcourse => (
          <div> {eachcourse.CourseName}</div>
        ))}
        <button onClick={this.searchallcourses}>Search For All Courses</button>
      </div>
    );
  }
}

export default SearchProf;
