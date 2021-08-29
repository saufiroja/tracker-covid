import React, { Component } from "react";
import { Cards, Chart, CountryPicker } from "./components";
import { fetchData } from "./api";
import styles from "./App.module.css";

export default class App extends Component {
  state = {
    data: {},
  };

  async componentDidMount() {
    const fatchedData = await fetchData();
    this.setState({ data: fatchedData });
  }

  render() {
    const { data } = this.state;
    return (
      <div className={styles.container}>
        <Cards data={data} />
        <CountryPicker />
        <Chart />
      </div>
    );
  }
}
