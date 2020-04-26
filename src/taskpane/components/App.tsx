import * as React from "react";

import Header from "./Header";
import Progress from "./Progress";
import { ButtonDefaultExample } from "./Button";

import * as WordInsertUtils from "./../utils/insert";
import { IStackTokens, Stack } from "office-ui-fabric-react";
/* global Button Header, HeroList, HeroListItem, Progress, Word */

const stackTokens: IStackTokens = { childrenGap: 40, padding: 20 };

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
        <Stack horizontal wrap tokens={stackTokens}>
          <ButtonDefaultExample text="Insert Image" onBtnClick={WordInsertUtils.insertImage} />
          <ButtonDefaultExample text="Insert HTML" onBtnClick={WordInsertUtils.insertHTML} />
          <ButtonDefaultExample text="Insert Table" onBtnClick={WordInsertUtils.insertTable} />
        </Stack>
      </div>
    );
  }
}
