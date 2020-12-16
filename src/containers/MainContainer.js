import React, { Component } from "react"
import SearchBar from "../components/SearchBar"
import PortfolioContainer from "./PortfolioContainer"
import StockContainer from "./StockContainer"

class MainContainer extends Component {
  state = { stocksArray: [], portfolio: [], filter: "All", sort: "None" }
  componentDidMount() {
    fetch(`http://localhost:3000/stocks`)
      .then((resp) => resp.json())
      .then((stocksArray) => {
        console.log(stocksArray)
        this.setState({ stocksArray })
      })
  }
  addToPortfolio = (stockObj) => {
    console.log(stockObj)
    let newArray = [...this.state.portfolio, stockObj]
    let unique = [...new Set(newArray)]
    this.setState({ portfolio: unique })
  }

  removeFromPortfolio = (obj) => {
    console.log(obj)
    let index = this.state.portfolio.findIndex((stock) => stock.id === obj.id)
    let newArray = [...this.state.portfolio]
    newArray.splice(index, 1)
    this.setState({ portfolio: newArray })
  }

  filterByType = (e) => {
    if (e.target.value === "Tech") {
      console.log(e.target.value)
      this.setState({ filter: "Tech" })
    } else if (e.target.value === "Sportswear") {
      this.setState({ filter: "Sportswear" })
    } else if (e.target.value === "Finance") {
      this.setState({ filter: "Finance" })
    }
  }

  sortBy = (e) => {
    if (e.target.value === "Alphabetically") {
      this.setState({ sort: "Alphabetically" })
    } else if (e.target.value === "Price") {
      this.setState({ sort: "Price" })
    }
  }

  displayStocks = () => {
    let filteredStocks = [...this.state.stocksArray]
    if (this.state.filter !== "All") {
      return (filteredStocks = filteredStocks.filter(
        (stock) => stock.type === this.state.filter
      ))
    } else if (this.state.sort === "Alphabetically") {
      return filteredStocks.sort((a, b) => (a.name > b.name ? 1 : -1))
    } else if (this.state.sort === "Price") {
      return filteredStocks.sort((a, b) => (a.price > b.price ? 1 : -1))
    } else {
      return filteredStocks
    }
  }

  render() {
    console.log(this.displayStocks())
    return (
      <div>
        <SearchBar changeHandler={this.filterByType} sortBy={this.sortBy} />

        <div className="row">
          <div className="col-8">
            <StockContainer
              stocksArray={this.displayStocks}
              clickHandler={this.addToPortfolio}
            />
          </div>
          <div className="col-4">
            <PortfolioContainer
              portfolioArray={this.state.portfolio}
              clickHandler={this.removeFromPortfolio}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default MainContainer
