import React from "react";

class ResumeForm extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>We will make resume here</h1>
        <form>
          <label for="name">Enter Your Name:</label>
          <input type="text" id="name" />
          <br />
          <label for="image">Upload Your Image:</label>
          <input type="file" id="image" />
          <br />
          <label for="objective">Your Objective:</label>
          <input
            type="text"
            id="objective"
            placeholder="To secure a challenging..."
          />
          <br />
          <label for="email">Enter Your Email:</label>
          <input type="text" id="email" />
          <br />
          <label for="role">Enter Your Role:</label>
          <input type="text" id="role" placeholder="Front End Developer" />
          <br />
          <label for="primaryContact">Enter Your Primary Contact:</label>
          <input type="text" id="primaryContact" placeholder="+91-XXXXXXXXXX" />
          <br />
          <label for="primaryContact">Enter Your Secondary Contact:</label>
          <input
            type="text"
            id="secondaryContact"
            placeholder="+91-XXXXXXXXXX"
          />
          <br />
          <label for="github">GitHub:</label>
          <input type="text" id="github" />
          <br />
          <label for="linkedin">Linkedin:</label>
          <input type="text" id="linkedin" />
          <br />
        </form>
      </div>
    );
  }
}

export default ResumeForm;
