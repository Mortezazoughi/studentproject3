import React from "react";
import axios from "axios";
class StudentProfile extends Component {
  state = {
    student: []
  };

  componentDidMount() {
    const url = "http://localhost:8080/getStudent";
    axios
      .get(url)
      .then(data => {
        this.setState({
          student: data.body
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        {/* {this.state.student.map(studentinfo=>(
        //  firstName: {studentinfo.fname}


      ))} */}
        <p>test</p>
      </div>
    );
  }
}

export default StudentProfile;
