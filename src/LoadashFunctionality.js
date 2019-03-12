import React, { Component } from "react";
import { data } from "./data";
import "./LoadashFunctionality.css";
import Table from "./Table";
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
          <Table search={this.search} data={this.state.data} />
        )}
      </div>
    );
  }
}
