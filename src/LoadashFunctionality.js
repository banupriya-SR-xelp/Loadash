import React, { Component } from "react";
import { data } from "./data";
import "./LoadashFunctionality.css";
export default class LoadashFunctionality extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showTable: false,
      applyedFilter: false,
      data: data
    };
  }
  showTable = () => {
    this.setState({ showTable: !this.state.showTable, applyedFilter: false });
  };
  handleFilter = () => {
    this.showTable();
  };
  search = (key, val) => {
    console.log(val);
    var newData =
      data &&
      data.filter(function(item) {
        return item[key].includes(val);
      });
    this.setState({ data: newData, applyedFilter: true });
    if (val.length < 1) {
      this.setState({ applyedFilter: false });
    }
  };
  componentDidMount() {
    this.setState({ showTable: true });
  }
  render() {
    return (
      <div className={"base"}>
        <div className={"buttonbase"}>
          {this.state.showTable && (
            <div className={"buttonHolder"}>
              <button
                className={"selectedButton"}
                onClick={() => {
                  this.showTable();
                }}
              >
                Map()
              </button>
            </div>
          )}
          {this.state.applyedFilter && (
            <div className="buttonHolder">
              <button
                className={"selectedButton"}
                onClick={() => this.handleFilter()}
              >
                Filter()
              </button>
            </div>
          )}
        </div>
        {this.state.showTable && (
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
                      onChange={val =>
                        this.search("Description", val.target.value)
                      }
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
              {this.state.data && this.state.data.length > 0 ? (
                this.state.data.map(val => {
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
        )}
      </div>
    );
  }
}
