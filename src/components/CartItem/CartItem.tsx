import React, { Component } from "react";

import { CartItemType, CartActionTypes } from "types/cart";

import { formatCurrency } from "utils/format";

import classes from "./CartItem.module.css";

type Props = {
  item: CartItemType;
  addQuantity: (id: string) => CartActionTypes;
  subtractQuantity: (id: string) => CartActionTypes;
  removeFromCart: (id: string) => CartActionTypes;
  changeQuantity: (id: string, quantity: number) => CartActionTypes;
};

class CartItem extends Component<Props> {
  get price() {
    return formatCurrency(this.props.item.price);
  }

  subtractQuantity = () => {
    const { subtractQuantity, item } = this.props;
    subtractQuantity(item.id);
  };

  addQuantity = () => {
    const { addQuantity, item } = this.props;
    addQuantity(item.id);
  };

  removeFromCart = () => {
    const { removeFromCart, item } = this.props;
    removeFromCart(item.id);
  };

  changeQuantity = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { changeQuantity, item } = this.props;
    const quantity = parseInt(e.target.value);
    changeQuantity(item.id, quantity);
  };

  render() {
    const { name, quantity } = this.props.item;
    return (
      <div className={classes["item"]}>
        <span className={classes["item__title"]} title={name}>
          {name}
        </span>
        <div className={classes["item__quantity"]}>
          <button
            className={classes["item__quantity-button"]}
            onClick={this.subtractQuantity}
          >
            -
          </button>
          <input
            className={classes["item__quantity-input"]}
            type="number"
            value={quantity}
            onChange={this.changeQuantity}
          />
          <button
            className={classes["item__quantity-button"]}
            onClick={this.addQuantity}
          >
            +
          </button>
        </div>
        <span className={classes["item__price"]} title={this.price}>
          {this.price}
        </span>
        <button
          className={classes["item__remove-button"]}
          onClick={this.removeFromCart}
        />
      </div>
    );
  }
}

export default CartItem;
