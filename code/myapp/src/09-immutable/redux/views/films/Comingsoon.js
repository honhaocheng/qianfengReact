import React, { Component } from 'react'
import axios from 'axios'

export default class Comingsoon extends Component {
  componentDidMount() {
    axios.get('/ajax/comingList?ci=30&limit=10&movieIds=&token=&optimus_uuid=D26C98A041F511EFA5397B0397EF94128EEA1CAFE1B64FFC8708374667C37CE6&optimus_risk_level=71&optimus_code=10')
         .then(res => {
          console.log('res', res.data)
         })
  }
  render() {
    return (
      <div>Comingsoon</div>
    )
  }
}

