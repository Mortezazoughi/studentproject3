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
        this.setState({ AllCourses: res.data });
      })
      .catch(err => console.log(err));
  };
  render() {
    return (
      <div>
        <button onClick={this.searchallcourses}>Search For All Courses</button>
        {this.state.AllCourses.map(eachcourse => (
          <div>
            <p>{eachcourse.courseName}</p>
          </div>
        ))}
        {/* <AlltheStuff /> */}
      </div>
    );
  }
}

export default SearchProf;
