import React, { Component } from "react";
import shortid from "shortid";
import { Form } from "react-final-form";

import Button from "components/Button";
import InputField from "components/InputField";

import { CartItemType, CartActionTypes } from "types/cart";

import classes from "./AddToCartForm.module.css";

type Props = {
  addToCart: (item: CartItemType) => CartActionTypes;
};

type FormValues = { name: string; quantity: string; price: string };

class AddToCartForm extends Component<Props> {
  onSubmit = ({ name, quantity, price }: FormValues) => {
    this.props.addToCart({
      id: shortid.generate(),
      name,
      quantity: parseInt(quantity),
      price: parseFloat(price)
    });
  };

  render() {
    return (
      <div className={classes["form"]}>
        <Form
          initialValues={{ quantity: "1" }}
          onSubmit={this.onSubmit}
          validate={validate}
        >
          {({ handleSubmit, form, hasValidationErrors }) => (
            <form
              onSubmit={async event => {
                await handleSubmit(event);
                // @ts-ignore
                form.restart();
              }}
            >
              <h2 className={classes["form__title"]}>Add New Item</h2>
              <InputField name="name" title="Name" />
              <InputField
                name="quantity"
                title="Quantity"
                type="number"
                min={1}
              />
              <InputField
                name="price"
                title="Price"
                type="number"
                step={0.1}
                min={0}
              />
              <Button
                className={classes["form__submit"]}
                disabled={hasValidationErrors}
              >
                Add To Cart
              </Button>
            </form>
          )}
        </Form>
      </div>
    );
  }
}

export default AddToCartForm;

const validate = (values: FormValues) => {
  const errors: Partial<FormValues> = {};
  const parsedQuantity = parseFloat(values.quantity);
  if (!values.name?.trim()) {
    errors.name = "Required";
  }
  if (!Number.isInteger(parsedQuantity)) {
    errors.quantity = "Quantity must be an integer";
  }
  if (parsedQuantity < 1) {
    errors.quantity = "Quantity must be greater than or equal to 1";
  }
  if (!values.quantity) {
    errors.quantity = "Required";
  }
  if (parseFloat(values.price) < 0) {
    errors.price = "Price must be greater than or equal to 0";
  }
  if (!values.price) {
    errors.price = "Required";
  }
  return errors;
};
