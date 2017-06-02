import React from 'react'
import dc from 'dc'
import BaseChart from './base-chart'
import baseMixin from '../mixins/base-mixin'
import colorMixin from '../mixins/color-mixin'
import marginMixin from '../mixins/margin-mixin'
import heatMapMixin from '../mixins/heatmap-mixin'

const {bool, number, string} = React.PropTypes

@heatMapMixin
@colorMixin
@marginMixin
@baseMixin
export default class HeatMap extends BaseChart{
  static displayName = 'HeatMap'

  componentDidMount(){
    this.chart = dc.heatMap(this.chart)
    this.configure()
    this.chart.render()
  }
}
