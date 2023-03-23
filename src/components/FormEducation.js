import React, { Component } from "react";

export default class FormEducation extends Component {
  render() {
    return (
      <>
        <input
          className="ipt"
          type="text"
          placeholder="School name"
          name="SchoolName"
          value={this.props.data.SchoolName}
          onChange={(e) => this.props.update(e, this.props.data.id)}
        />
        <input
          className="ipt"
          type="text"
          placeholder="Title of study"
          name="titleOfStudy"
          value={this.props.data.titleOfStudy}
          onChange={(e) => this.props.update(e, this.props.data.id)}
        />
        <input
          className="ipt"
          type="month"
          placeholder="Date of study name"
          name="dateOfStudy"
          value={this.props.data.dateOfStudy}
          onChange={(e) => this.props.update(e, this.props.data.id)}
        />
      </>
    );
  }
}
