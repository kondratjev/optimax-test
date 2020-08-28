import React, { Component } from "react";

import { formatCurrency } from "utils/format";

import classes from "./Subtotal.module.css";

type Props = { subtotal: number };

class Subtotal extends Component<Props> {
  get subtotal() {
    return formatCurrency(this.props.subtotal);
  }

  render() {
    return (
      <p className={classes["subtotal"]}>
        <span className={classes["subtotal__label"]}>Subtotal:</span>{" "}
        <span className={classes["subtotal__value"]} title={this.subtotal}>
          {this.subtotal}
        </span>
      </p>
    );
  }
}

export default Subtotal;
