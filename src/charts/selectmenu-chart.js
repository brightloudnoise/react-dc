import React from 'react'
import dc from 'dc'
import BaseChart from './base-chart'
import baseMixin from '../mixins/base-mixin'

import SelectMenuMixin from '../mixins/selectmenu-mixin'

const {bool, number, string} = React.PropTypes

@SelectMenuMixin
@baseMixin
export default class SelectMenu extends BaseChart{
  static displayName = 'SelectMenu'

  componentDidMount(){
    this.chart = dc.selectMenu(this.chart)
    this.configure()
    this.chart.render()
  }
}
