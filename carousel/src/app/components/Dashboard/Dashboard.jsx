import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
import Carousel from "./../Carousel/Carousel";

class Dashboard extends Component {
  state = {
    score: null,
    debt: null
  };
  componentDidMount() {
    this.getDetails();
  }
  getDetails = () => {
    const url =
      "https://s3.amazonaws.com/cdn.clearscore.com/native/interview_test/creditReportInfo.json";
    axios
      .get(url)
      .then(response => {
        this.setState({
          score: response.data.creditReportInfo.score,
          debt: response.data.creditReportInfo.currentLongTermDebt
        });
      })
      .catch(error => console.log(error));
  };
  render() {
    return (
      <div className="dashboard">
        <Carousel score={this.state.score} debt={this.state.debt} />
      </div>
    );
  }
}
export default Dashboard;
