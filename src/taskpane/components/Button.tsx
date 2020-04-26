import * as React from "react";

import { DefaultButton, Stack, IStackTokens, mergeStyleSets, IButtonStyles } from "office-ui-fabric-react";

// Props that this component is likely to received

export interface IButtonProps {
  disabled?: boolean;
  checked?: boolean;
  text?: string;
  onBtnClick: Function;
}

const stackTokens: IStackTokens = { childrenGap: 40 };

const className = mergeStyleSets({
  button: {
    padding: 15,
    background: "#778899"
  }
});

const CustomButtonStyles: IButtonStyles = {
  flexContainer: {
    background: "#778899"
  },
  textContainer: {
    background: "#808080",
    padding: 10
  },
  label: {
    color: "#ffffff"
  },
  labelHovered: {
    color: "#000000"
  }
};

export const ButtonDefaultExample: React.FunctionComponent<IButtonProps> = props => {
  const { disabled, checked, text, onBtnClick } = props;

  return (
    <Stack horizontal tokens={stackTokens}>
      <DefaultButton
        className={className.button}
        styles={CustomButtonStyles}
        text={text}
        onClick={e => onBtnClick(e)}
        allowDisabledFocus
        disabled={disabled}
        checked={checked}
      ></DefaultButton>
    </Stack>
  );
};
