import React from 'react'
import {withProps} from '../utils'

const {bool, number, string, func} = React.PropTypes

export default withProps({
  boxPadding: number,
  boxWidth: number,
  outerPadding: number,
  tickFormat: func
})
