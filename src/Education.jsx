import React from "react";

class Education extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Education</h1>
        <label for="name">Enter Your Name:</label>
        <input type="text" id="name" />
        <br />
        <label for="image">Upload Your Image:</label>
        <input type="file" id="image" />
        <br />
      </div>
    );
  }
}

export default Education;
