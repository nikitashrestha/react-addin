import * as React from "react";

import Header from "./Header";
import Progress from "./Progress";
import { ButtonDefaultExample } from "./Button";

import * as WordInsertUtils from "./../utils/insert";
/* global Button Header, HeroList, HeroListItem, Progress, Word */

export interface AppProps {
  title: string;
  isOfficeInitialized: boolean;
}

export default class App extends React.Component<AppProps> {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { title, isOfficeInitialized } = this.props;

    if (!isOfficeInitialized) {
      return (
        <Progress title={title} logo="assets/logo-filled.png" message="Please sideload your addin to see app body." />
      );
    }

    return (
      <div className="ms-welcome">
        <Header logo="assets/logo-filled.png" title={this.props.title} message="Welcome" />
        <ButtonDefaultExample text="Insert Text" onBtnClick={WordInsertUtils.insertText} />
        <ButtonDefaultExample text="Insert Paragraph" onBtnClick={WordInsertUtils.insertParagraph} />
      </div>
    );
  }
}
