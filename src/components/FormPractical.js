import React, { Component } from "react";

export default class FormPractical extends Component {
  render() {
    return (
      <>
        <input
          className="ipt"
          type="text"
          placeholder="Company name"
          name="companyName"
          value={this.props.data.companyName}
          onChange={(e) => this.props.update(e, this.props.data.id)}
        />
        <input
          className="ipt"
          type="text"
          placeholder="Position title"
          name="positionTitle"
          value={this.props.data.positionTitle}
          onChange={(e) => this.props.update(e, this.props.data.id)}
        />
        <input
          className="ipt"
          type="text"
          placeholder="Main tasks"
          name="mainTasks"
          value={this.props.data.mainTasks}
          onChange={(e) => this.props.update(e, this.props.data.id)}
        />
        <input
          className="ipt inline"
          type="month"
          placeholder="Date from"
          name="dateFrom"
          value={this.props.data.dateFrom}
          onChange={(e) => this.props.update(e, this.props.data.id)}
        />
        <input
          className="ipt inline"
          type="month"
          placeholder="Date to"
          name="dateTo"
          value={this.props.data.dateTo}
          onChange={(e) => this.props.update(e, this.props.data.id)}
        />
      </>
    );
  }
}
