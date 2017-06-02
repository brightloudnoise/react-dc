import React from 'react'
import dc from 'dc'
import BaseChart from './base-chart'
import baseMixin from '../mixins/base-mixin'
import colorMixin from '../mixins/color-mixin'
import coordinateGridMixin from '../mixins/coordinate-grid-mixin'
import BubbleMixin from '../mixins/bubble-mixin'

const {bool, number, string} = React.PropTypes

@BubbleMixin
@colorMixin
@coordinateGridMixin
@baseMixin
export default class BubbleChart extends BaseChart{
  static displayName = 'BubbleChart'

  componentDidMount(){
    this.chart = dc.bubbleChart(this.chart)
    this.configure()
    this.chart.render()
  }
}
