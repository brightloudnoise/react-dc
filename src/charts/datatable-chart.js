import React from 'react'
import dc from 'dc'
import BaseChart from './base-chart'
import baseMixin from '../mixins/base-mixin'

import DataTableMixin from '../mixins/datatable-mixin'

const {bool, number, string} = React.PropTypes

@DataTableMixin
@baseMixin
export default class DataTable extends BaseChart{
  static displayName = 'DataTable'

  componentDidMount(){
    this.chart = dc.dataTable(this.chart)
    this.configure()
    this.chart.render()
  }
}
