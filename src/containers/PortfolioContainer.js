import React, { Component } from "react"
import Stock from "../components/Stock"

class PortfolioContainer extends Component {
  portfolioArray = () => {
    return this.props.portfolioArray.map((stock) => (
      <Stock stockObj={stock} clickHandler={this.props.clickHandler} />
    ))
  }

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
        {this.portfolioArray()}
      </div>
    )
  }
}

export default PortfolioContainer
