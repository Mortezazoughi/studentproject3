import React, { Component } from "react";
import API from "../../utils/API";

class SearchAllCourses extends Component {
  state = {
    AllCourses: [],
    searchAllCourses: ""
  };

  // searchallcourses = e => {
  //   API.searchallcourses()
  //     .then(res => {
  //       console.log(res.data);
  //       this.setState({ AllCourses: res.data });
  //     })
  //     .catch(err => console.log(err));
  // };
  componentDidMount() {
    API.searchallcourses()
      .then(res => {
        // console.log(res.data);
        this.setState({ AllCourses: res.data });
      })
      .catch(err => console.log(err));
  }
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
    console.log(this.state.searchAllCourses);
  };
  render() {
    return (
      <div>
        <button onClick={this.searchallcourses}>Search For All Courses</button>
        <select>
          {this.state.AllCourses.map((eachcourse, i) => (
            <option key={eachcourse.id} value={eachcourse.courseName}>
              {eachcourse.courseName}
            </option>
          ))}
        </select>
        {/* <AlltheStuff /> */}
        <p>Here</p>
      </div>
    );
  }
}

export default SearchAllCourses;
