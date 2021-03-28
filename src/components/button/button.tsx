import styled from "styled-components";
import { PRIMARY_COLOUR, SECONDARY_COLOUR } from "../../constants";

export interface Props {
  intent: "primary" | "secondary" | "link";
  disabled: boolean;
}

export const Button = styled.button.attrs(({ intent }: Props) => ({
  "data-test": `${intent}-button`,
}))`
  background: ${({ intent }: Props) => {
    switch (intent) {
      case "primary":
        return PRIMARY_COLOUR;
      case "secondary":
        return SECONDARY_COLOUR;
      case "link":
        return "none";
      default:
        return PRIMARY_COLOUR;
    }
  }};

  color: ${({ intent }: Props) => {
    switch (intent) {
      case "primary":
        return SECONDARY_COLOUR;
      case "secondary":
        return PRIMARY_COLOUR;
      case "link":
        return PRIMARY_COLOUR;
      default:
        return SECONDARY_COLOUR;
    }
  }};

  padding: ${({ intent }: Props) => {
    switch (intent) {
      case "primary":
        return "9px 20px 8px 20px";
      case "secondary":
        return "9px 20px 8px 20px";
      case "link":
        return 0;
      default:
        return "9px 20px 8px 20px";
    }
  }};

  border: ${({ intent }: Props) => {
    switch (intent) {
      case "primary":
        return `solid 1px ${PRIMARY_COLOUR}`;
      case "secondary":
        return `solid 1px ${PRIMARY_COLOUR}`;
      case "link":
        return "none";
      default:
        return "inherit";
    }
  }};

  text-align: ${({ intent }: Props) => {
    switch (intent) {
      case "primary":
        return "center";
      case "secondary":
        return "center";
      case "link":
        return "left";
      default:
        return "inherit";
    }
  }};

  :focus {
    outline: 0;
  }
  opacity: ${({ disabled }: Props) => (disabled === true ? 0.6 : 1.0)};
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  border-radius: 3px;

  :hover {
    cursor: ${({ disabled }: Props) =>
      disabled === true ? "not-allowed" : "pointer"};
  }
`;
