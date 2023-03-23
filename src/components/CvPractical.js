import React, { Component } from "react";

export default class CvPractical extends Component {
  render() {
    return (
      <div className="cv-practical">
        <div className="cv-ready">
          <div className="title">Company name</div>
          <div className="content">{this.props.data.companyName}</div>
        </div>
        <div className="cv-ready">
          <div className="title">Position title</div>
          <div className="content">{this.props.data.positionTitle}</div>
        </div>
        <div className="cv-ready">
          <div className="title">Main tasks</div>
          <div className="content">{this.props.data.mainTasks}</div>
        </div>
        <div className="cv-ready">
          <div className="title">Date from</div>
          <div className="content">{this.props.data.dateFrom}</div>
        </div>
        <div className="cv-ready">
          <div className="title">Date to</div>
          <div className="content">{this.props.data.dateTo}</div>
        </div>
      </div>
    );
  }
}
