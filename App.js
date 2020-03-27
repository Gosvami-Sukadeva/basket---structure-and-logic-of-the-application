class App extends React.Component {
  state = {
    availableProducts: 7,
    shopingCart: 1
  };

  handleRemoveFromCart = () => {
    this.setState({
      shopingCart: this.state.shopingCart - 1
    });
  };

  handleAddCart = () => {
    this.setState({
      shopingCart: this.state.shopingCart + 1
    });
  };
  handleBuy = () => {
    this.setState({
      availableProducts: this.state.availableProducts - this.state.shopingCart,
      shopingCart: 0
    });
  };
  render() {
    return (
      <>
        <button
          disabled={this.state.shopingCart ? false : true}
          onClick={this.handleRemoveFromCart}
        >
          -
        </button>
        <span> {this.state.shopingCart} </span>
        <button
          disabled={
            this.state.shopingCart === this.state.availableProducts
              ? true
              : false
          }
          onClick={this.handleAddCart}
        >
          +
        </button>
        {this.state.shopingCart > 0 && (
          <button id="kup" onClick={this.handleBuy}>
            Kup
          </button>
        )}
      </>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
