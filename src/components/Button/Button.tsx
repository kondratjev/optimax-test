import React, { Component } from "react";
import classnames from "classnames";

import classes from "./Button.module.css";

type Props = {} & JSX.IntrinsicElements["button"];

class Button extends Component<Props> {
  render() {
    const { className, children, ...props } = this.props;
    return (
      <button className={classnames(classes["button"], className)} {...props}>
        {children}
      </button>
    );
  }
}

export default Button;
