import React from "react";
import { withProps } from "../utils";

const { bool, number, string } = React.PropTypes;

export default withProps({
  emptyTitle: string,
  numberVisible: number,
  promptText: string,
  multiple: bool,
  controlsUseVisibility: bool
});
