import React, { Component } from "react";

export default class CvGeneral extends Component {
  render() {
    return (
      <div className="cv-general">
        <div className="cv-ready">
          <div className="title">Name</div>
          <div className="content">{this.props.data.name}</div>
        </div>
        <div className="cv-ready">
          <div className="title">Email</div>
          <div className="content">{this.props.data.email}</div>
        </div>
        <div className="cv-ready">
          <div className="title">Phone</div>
          <div className="content">{this.props.data.phone}</div>
        </div>
      </div>
    );
  }
}
