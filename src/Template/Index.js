import React, { Component } from "react";
import Helmet from "react-helmet";
import Carousel from "../Components/Carousel/Index";

const API =
  "https://pixabay.com/api/?key=9656065-a4094594c34f9ac14c7fc4c39&q=beautiful+landscape&image_type=photo&per_page=6";

class Template extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
  }

  getData() {
    fetch(API)
      .then(response => response.json())
      .then(data => this.setState({ data: data }));
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    const data = this.state.data;
    console.log(data);

    return (
      <>
        <Helmet defaultTitle="Publicis Sapient" charSet="utf-8">
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <meta name="theme-color" content="#000000" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css?family=Ropa+Sans&display=swap"
            rel="stylesheet"
          />
          <link rel="canonical" href="/" />
        </Helmet>

        <main>
          <Carousel data={data.hits} />
        </main>
      </>
    );
  }
}

export default Template;
