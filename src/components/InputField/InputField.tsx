import React, { Component } from "react";
import { Field } from "react-final-form";

import classes from "./InputField.module.css";

type Props = {
  name: string;
  title: string;
} & JSX.IntrinsicElements["input"];

class InputField extends Component<Props> {
  render() {
    const { name, title, ...props } = this.props;
    return (
      <Field name={name}>
        {({ input, meta }) => (
          <div className={classes["container"]}>
            <div className={classes["wrapper"]}>
              <p className={classes["title"]}>{title}</p>
              <input className={classes["input"]} {...input} {...props} />
            </div>
            {meta.touched && meta.error && (
              <p className={classes["error"]}>{meta.error}</p>
            )}
          </div>
        )}
      </Field>
    );
  }
}

export default InputField;
