import React, { Component } from 'react';
import { Accordion, Icon } from 'semantic-ui-react';

export default class CourseTitles extends Component {
  state = { activeIndex: 0 };

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  render() {
    const { activeIndex } = this.state;

    return (
      <Accordion styled>
        <Accordion.Title
          active={activeIndex === 0}
          index={0}
          onClick={this.handleClick}
        >
          <Icon name="dropdown" />
          Java 101
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
          <p>Dr. Hannible</p>
          <p>T TH 10am-11:50am</p>
          <p>Freedome Hall</p>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 1}
          index={1}
          onClick={this.handleClick}
        >
          <Icon name="dropdown" />
          Javascript 101
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
          <p>Dr. Mousavi</p>
          <p>M W F 8am-9:50am</p>
          <p>Technology hall</p>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 2}
          index={2}
          onClick={this.handleClick}
        >
          <Icon name="dropdown" />
          Priciples of MySQL
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 2}>
          <p>Dr. Ron</p>
          <p>T TH 8am-9:50am</p>
        </Accordion.Content>
      </Accordion>
    );
  }
}
