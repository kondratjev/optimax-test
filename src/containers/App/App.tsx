import React, { Component } from "react";
import { connect, ConnectedProps } from "react-redux";

import CartItem from "components/CartItem";
import AddItemForm from "components/AddToCartForm";
import Loader from "components/Loader";
import Subtotal from "components/Subtotal";

import { RootState } from "reducers";

import {
  fetchCart,
  addToCart,
  removeFromCart,
  addQuantity,
  subtractQuantity,
  changeQuantity
} from "actions/cart";

import classes from "./App.module.css";

const mapStateToProps = ({ cart }: RootState) => ({
  cart: cart.items,
  isLoading: cart.isLoading,
  error: cart.error
});

const mapDispatchToProps = {
  fetchCart,
  addToCart,
  removeFromCart,
  addQuantity,
  subtractQuantity,
  changeQuantity
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = {} & PropsFromRedux;

class App extends Component<Props> {
  get subtotal() {
    return this.props.cart.reduce((total, item) => {
      const { price, quantity } = item;
      return total + price * quantity;
    }, 0);
  }

  componentDidMount() {
    this.props.fetchCart();
  }

  render() {
    const {
      cart,
      isLoading,
      error,
      addToCart,
      addQuantity,
      subtractQuantity,
      changeQuantity,
      removeFromCart
    } = this.props;

    return (
      <div className={classes["container"]}>
        <div className={classes["grid"]}>
          <div className={classes["cart"]}>
            <h1 className={classes["cart__title"]}>Shopping Cart</h1>
            {!isLoading ? (
              cart.length > 0 ? (
                <>
                  {cart.map(item => (
                    <CartItem
                      key={item.id}
                      item={item}
                      addQuantity={addQuantity}
                      subtractQuantity={subtractQuantity}
                      changeQuantity={changeQuantity}
                      removeFromCart={removeFromCart}
                    />
                  ))}
                  <Subtotal subtotal={this.subtotal} />
                </>
              ) : error ? (
                <p className={classes["cart__error"]}>Error: {error}</p>
              ) : (
                <p className={classes["cart__empty"]}>Cart Is Empty</p>
              )
            ) : (
              <Loader />
            )}
          </div>
          <div className={classes["form"]}>
            <AddItemForm addToCart={addToCart} />
          </div>
        </div>
      </div>
    );
  }
}

export default connector(App);
