import React, { Component } from "react";

export default class FormGeneral extends Component {
  render() {
    return (
      <div className="general">
        <h2>General info</h2>
        <input
          className="ipt"
          type="text"
          placeholder="Name"
          name="name"
          value={this.props.data.name}
          onChange={(e) => this.props.editG(e)}
        />
        <input
          className="ipt"
          type="email"
          placeholder="Email"
          name="email"
          value={this.props.data.email}
          onChange={(e) => this.props.editG(e)}
        />
        <input
          className="ipt"
          type="tel"
          placeholder="Phone"
          name="phone-er"
          value={this.props.data.phone}
          onChange={(e) => console.log(e.target.value)}
        />
        <button className="btn" onClick={() => this.props.handleEditG()}>
          Edit
        </button>
      </div>
    );
  }
}
