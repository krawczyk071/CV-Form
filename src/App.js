import React, { Component } from "react";
import "./styles.css";
import FormEducation from "./components/FormEducation";
import FormGeneral from "./components/FormGeneral";
import FormPractical from "./components/FormPractical";
import CvEducation from "./components/CvEducation";
import CvPractical from "./components/CvPractical";
import CvGeneral from "./components/CvGeneral";

function genId() {
  return new Date().valueOf();
}

class App extends Component {
  emptyP = (gid) => ({
    id: gid,
    companyName: "",
    positionTitle: "",
    mainTasks: "",
    dateFrom: "",
    dateTo: "",
  });
  emptyE = (gid) => ({
    id: gid,
    SchoolName: "",
    titleOfStudy: "",
    dateOfStudy: "",
  });

  state = {
    general: { name: "", email: "", phone: "" },
    education: [this.emptyE(genId())],
    practical: [this.emptyP(genId())],
  };
  handleEditG = (e) => {
    this.setState((prev) => {
      return {
        general: { ...prev.general, [e.target.name]: e.target.value },
      };
    });
    // console.log(e.target);
  };

  handleEditE = (e, id) => {
    this.setState((prev) => {
      let prevIdx = prev.education.findIndex((item) => item.id === id);
      prev.education[prevIdx] = {
        ...prev.education[prevIdx],
        [e.target.name]: e.target.value,
      };
      return {
        education: prev.education,
      };
    });
  };

  addE = () => {
    this.setState((prev) => {
      return { education: [...prev.education, this.emptyE(genId())] };
    });
  };

  handleEditP = (e, id) => {
    this.setState((prev) => {
      let prevIdx = prev.practical.findIndex((item) => item.id === id);
      prev.practical[prevIdx] = {
        ...prev.practical[prevIdx],
        [e.target.name]: e.target.value,
      };
      return {
        practical: prev.practical,
      };
    });
  };

  addP = () => {
    this.setState((prev) => {
      return { practical: [...prev.practical, this.emptyP(genId())] };
    });
  };

  render() {
    const { general, education, practical } = this.state;
    const educationItems = education.map((eduItem) => {
      // console.log(eduItem);
      return (
        <FormEducation
          key={eduItem.id}
          data={eduItem}
          update={this.handleEditE}
        />
      );
    });
    const cvEducationItems = education.map((eduItem) => {
      return <CvEducation key={eduItem.id} data={eduItem} />;
    });

    const practicalItems = practical.map((praItem) => {
      // console.log(praItem);
      return (
        <FormPractical
          key={praItem.id}
          data={praItem}
          update={this.handleEditP}
        />
      );
    });
    const cvPracticalItems = practical.map((eduItem) => {
      return <CvPractical key={eduItem.id} data={eduItem} />;
    });

    return (
      <div className="wrapper">
        <header>
          <h1>CV generator</h1>
        </header>
        <main>
          <FormGeneral data={general} editG={this.handleEditG} />

          <div className="education">
            <h2>Education info</h2>
            {educationItems}
            <button className="btn">Edit</button>
            <button className="btn" onClick={this.addE}>
              Add more
            </button>
          </div>

          <div className="practical">
            <h2>Practical info</h2>
            {practicalItems}
            <button className="btn">Edit</button>
            <button className="btn" onClick={this.addP}>
              Add more
            </button>
          </div>

          <div className="output">
            <h3>Your CV</h3>
            <CvGeneral data={general} />
            {cvPracticalItems}
            {cvEducationItems}
          </div>
        </main>
        <footer>Odin project 2023 by Szymon Krawczyk</footer>
      </div>
    );
  }
}

export default App;

// 1 The submit button should submit your form and display the value of your input fields in HTML elements.
// 2 The edit button should (display) the input fields, with the previously displayed information as values.
//   In those input fields, you should be able to edit and resubmit the content.
// https://michalosman.github.io/cv-application/
