import React from 'react'
import {withProps} from '../utils'

const {bool, number, string, func} = React.PropTypes

export default withProps({
  elasticRadius: bool,
  sortBubbleSize: bool,
  radiusValueAccessor: func

})
