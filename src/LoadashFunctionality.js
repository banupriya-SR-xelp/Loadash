import React, { Component } from "react";
import { data } from "./data";

export default class LoadashFunctionality extends Component {
  render() {
    console.log(data);
    return (
      <div>
        <button>Map()</button>
        <button>Filter()</button>
        <button>Range()</button>
        <button>Range()</button>
        <button>FindKey()</button>
        <button>FindLastKey()</button>
      </div>
    );
  }
}
