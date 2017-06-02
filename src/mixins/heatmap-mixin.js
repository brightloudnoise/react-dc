import React from 'react'
import {withProps} from '../utils'

const {bool, number, string, func, arrayOf} = React.PropTypes

export default withProps({
  boxOnClick: func,
  cols: arrayOf([string,number]),
  colsLabel: func,
  rows: arrayOf([string,number]),
  rowsLabel: func,
  xAxisOnClick: func,
  xBorderRadius: number,
  yAxisOnClick: func,
  yBorderRadius: number
})
