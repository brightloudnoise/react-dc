import React from 'react'
import dc from 'dc'
import BaseChart from './base-chart'
import baseMixin from '../mixins/base-mixin'
import colorMixin from '../mixins/color-mixin'
import marginMixin from '../mixins/margin-mixin'
import BoxPlotMixin from '../mixins/boxplot-mixin'

const {bool, number, string} = React.PropTypes

@BoxPlotMixin
@colorMixin
@marginMixin
@baseMixin
export default class BoxPlotChart extends BaseChart{
  static displayName = 'BoxPlotChart'

  componentDidMount(){
    this.chart = dc.boxPlot(this.chart)
    this.configure()
    this.chart.render()
  }
}
