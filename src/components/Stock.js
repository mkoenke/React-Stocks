import React from "react"

class Stock extends React.Component {
  localClickHandler = () => {
    this.props.clickHandler(this.props.stockObj)
  }
  render() {
    return (
      <div>
        <div className="card" onClick={this.localClickHandler}>
          <div className="card-body">
            <h5 className="card-title">{this.props.stockObj.name}</h5>
            <p className="card-text">{
              //ticker: stock price
              `${this.props.stockObj.ticker}: ${this.props.stockObj.price}`
            }</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Stock
