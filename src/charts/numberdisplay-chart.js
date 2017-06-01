import React from 'react'
import dc from 'dc'
import BaseChart from './base-chart'
import baseMixin from '../mixins/base-mixin'

import numberdisplayMixin from '../mixins/numberdisplay-mixin'

const {bool, number, string, func} = React.PropTypes

@numberdisplayMixin
@baseMixin
export default class NumberDisplay extends BaseChart{
  static displayName = 'NumberDisplay'

  componentDidMount(){
    this.chart = dc.numberDisplay(this.chart)
    this.configure()
    this.chart.render()
  }
}
