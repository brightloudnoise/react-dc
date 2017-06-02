import React from "react";
import { withProps } from "../utils";

const { bool, number, string, array, func } = React.PropTypes;

export default withProps({
  beginSlice: number,
  endSlice: number,
  columns: array,
  order: func,
  html: func,
  htmlGroup: func,
  size: number,
  sortBy: func
});
