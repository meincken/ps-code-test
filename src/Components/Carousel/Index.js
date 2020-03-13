import React, { Component } from "react";
import styled from "styled-components";
// import Controls from "./Controls";
// import Item from "./Items";
import { ReactComponent as NavigationIcon } from "../../Icons/arrow.svg";

const Section = styled.section`
  max-width: 90vw;
  margin: 0 auto;
`;

const Article = styled.article`
  display: flex;
  flex-wrap: nowrap;
  margin: 0 auto;
  max-width: 90vw;
  overflow-x: auto;
  position: relative;
`;

const Item = styled.div`
  flex: 0 0 auto;

  @media (min-width: 768px) {
    width: 20%;
  }

  img {
    width: 100%;
    display: block;
  }
`;

const Header = styled.h1``;

const Controls = styled.div`
  width: 90vw;
  margin: 0 auto;

  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
  }

  button {
    background: transparent;
    border: none;
    color: #fff;
    fill: #fff;
    margin-right: 5px;
    margin-top: -25px;
    padding: 5px 10px;
    position: absolute;
    top: 50%;

    + button {
      margin-right: 0;
    }

    @media (min-width: 768px) {
      background: blue;
      margin-top: 0;
    }

    &:focus {
      outline: 0;
    }

    @media (min-width: 768px) {
      position: relative;
    }

    span {
      display: none;

      @media (min-width: 768px) {
        display: block;
      }
    }

    svg {
      height: 50px;

      @media (min-width: 768px) {
        display: none;
      }
    }

    &.prev {
      left: 10px;
      border-radius: 5px 0 0 5px;

      svg {
        transform: rotate(180deg);
      }

      @media (min-width: 768px) {
        left: 0;
      }
    }

    &.next {
      right: 10px;
      border-radius: 0 5px 5px 0;

      @media (min-width: 768px) {
        right: 0;
      }
    }
  }
`;

class Carousel extends Component {
  constructor() {
    super();
    this.state = {
      activeIndex: 0
    };
    this.showNextSet = this.showNextSet.bind(this);
    this.showPrevSet = this.showPrevSet.bind(this);
  }

  showNextSet() {
    if (this.state.activeIndex < 5) {
      this.setState({ activeIndex: this.state.activeIndex + 1 });
    } else {
      this.setState({ activeIndex: 0 });
    }
  }

  showPrevSet() {
    if (this.state.activeIndex > 0) {
      this.setState({ activeIndex: this.state.activeIndex - 1 });
    } else {
      this.setState({ activeIndex: 5 });
    }
  }

  render() {
    const data = this.props.data;
    let sliderStyle = {
      transform: `translateX(${this.state.activeIndex * -100}%)`,
      transition: "0.5s"
    };

    if (data) {
      var projects = data.map(function(projects) {
        return (
          <Item key={projects.id} style={sliderStyle}>
            <img alt={projects.id} src={projects.webformatURL} />
            <h3>{projects.user}</h3>
          </Item>
        );
      });
    }

    return (
      <Section>
        <Header>Carousel Test</Header>
        <Article>{projects}</Article>
        <Controls>
          <button className="carousel__button prev" onClick={this.showPrevSet}>
            <NavigationIcon />
            <span>Prev</span>
          </button>
          <button className="carousel__button next" onClick={this.showNextSet}>
            <span>Next</span>
            <NavigationIcon />
          </button>
        </Controls>
      </Section>
    );
  }
}

export default Carousel;
