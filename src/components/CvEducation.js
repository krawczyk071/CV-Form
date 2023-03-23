import React, { Component } from "react";

export default class CvEducation extends Component {
  render() {
    return (
      <div className="cv-education">
        <div className="cv-ready">
          <div className="title">School name</div>
          <div className="content">{this.props.data.SchoolName}</div>
        </div>
        <div className="cv-ready">
          <div className="title">Title of study</div>
          <div className="content">{this.props.data.titleOfStudy}</div>
        </div>
        <div className="cv-ready">
          <div className="title">Date of study name</div>
          <div className="content">{this.props.data.dateOfStudy}</div>
        </div>
      </div>
    );
  }
}
