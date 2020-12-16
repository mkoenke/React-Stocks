import React, { Component } from "react"
import Stock from "../components/Stock"

class StockContainer extends Component {
  stocksArray = () => {
    return this.props
      .stocksArray()
      .map((stock) => (
        <Stock stockObj={stock} clickHandler={this.props.clickHandler} />
      ))
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <h2>Stocks</h2>
        {this.stocksArray()}
      </div>
    )
  }
}

export default StockContainer
