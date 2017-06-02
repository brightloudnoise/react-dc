import React from 'react'
import dc from 'dc'
import BaseChart from './base-chart'
import baseMixin from '../mixins/base-mixin'

import DataGridMixin from '../mixins/datagrid-mixin'

const {bool, number, string} = React.PropTypes

@DataGridMixin
@baseMixin
export default class DataGrid extends BaseChart{
  static displayName = 'DataGrid'

  componentDidMount(){
    this.chart = dc.dataGrid(this.chart)
    this.configure()
    this.chart.render()
  }
}
