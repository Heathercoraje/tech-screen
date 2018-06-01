import React, { Component } from "react";
import styled from "styled-components";
import * as d3 from "d3";

export default class Arc extends Component {
  componentDidMount() {
    this.renderArc();
  }
  componentDidUpdate() {
    this.renderArc();
  }

  tau = Math.PI * 2;

  renderArc = () => {
    d3.select("svg").remove();
    const context = this.setContext();
    this.setBackground(context);
    this.setForeground(context);
  };

  setContext = () => {
    let size = this.props.size;
    return d3
      .select(this.refs.arc)
      .append("svg")
      .attr("height", size)
      .attr("width", size)
      .attr("id", "d3-arc")
      .append("g")
      .attr("transform", `translate(${size / 2}, ${size / 2})`);
  };

  arc = () => {
    let size = this.props.size;
    return d3
      .arc()
      .innerRadius(size / 2 - 10)
      .outerRadius(size / 2)
      .startAngle(0);
  };

  setBackground = context => {
    return context
      .append("path")
      .datum({ endAngle: this.tau })
      .style("fill", "transparent")
      .attr("d", this.arc());
  };

  setForeground = context => {
    const score = this.props.score;
    return context
      .append("path")
      .datum({ endAngle: this.tau * this.props.score / 700 })
      .style("fill", "powderblue")
      .attr("d", this.arc());
  };

  render() {
    return <div ref="arc" className="arc" />;
  }
}
