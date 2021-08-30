import React, { Component } from "react";
import { Cards, Chart, CountryPicker } from "./components";
import { fetchData } from "./api";
import styles from "./App.module.css";
import coronaImage from "./image/image.png";

export default class App extends Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const fatchedData = await fetchData();

    this.setState({ data: fatchedData });
  }

  handleCountryChange = async (country) => {
    const fatchedData = await fetchData(country);

    this.setState({ data: fatchedData, country: country });
  };

  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <img className={styles.image} src={coronaImage} alt="COVID-19" />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}
