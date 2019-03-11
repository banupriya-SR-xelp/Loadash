import React, { Component } from "react";
import "./LoadashFunctionality.css";
export default class Table extends Component {
  search = (key, value) => {
    this.props.search(key, value);
  };

  render() {
    return (
      <div className="table">
        <table>
          <tr>
            <th>
              <div className={"tableHeader"}>
                State
                <input
                  type={"text"}
                  placeholder={"search for the state"}
                  onChange={val => this.search("State", val.target.value)}
                />
              </div>
            </th>
            <th>
              <div className={"tableHeader"}>
                Description
                <input
                  type={"text"}
                  placeholder={"search for the Description"}
                  onChange={val => this.search("Description", val.target.value)}
                />
              </div>
            </th>
            <th>
              <div className={"tableHeader"}>
                Tag
                <input
                  type={"text"}
                  placeholder={"search for the Tag"}
                  onChange={val => this.search("Tag", val.target.value)}
                />
              </div>
            </th>
          </tr>
          {this.props.data && this.props.data.length > 0 ? (
            this.props.data.map(val => {
              return (
                <tr className={"table"}>
                  <td>{val.State}</td>
                  <td>{val.Description}</td>
                  <td>{val.Tag}</td>
                </tr>
              );
            })
          ) : (
            <div className={"noData"}>nothing to display!</div>
          )}
        </table>
      </div>
    );
  }
}
