import React, { Component } from "react";
import "./product.scss";
import { MdAddCircle as AddIcon } from "react-icons/md";

class Product extends Component {
  constructor() {
    super();

    this.state = {
      start: false,
      productList: [
        {
          product: "",
          Quantity: "",
        },
      ],
    };
    this.onAddProduct = this.onAddProduct.bind(this);
    // this.updateChange_details = this.updateChange_details.bind(this);
    // this.updateChange_quantity = this.updateChange_quantity.bind(this);
  }

  onAddProduct() {
    this.setState({
      start: true,
      productList: this.state.productList.concat([
        {
          product: "",
          quantity: "",
        },
      ]),
    });
  }

  updateChange_details = (index) => (event) => {
    let lineItems = this.state.productList.map((items, i) => {
      if (index !== i) return items;

      return { ...items, [event.target.name]: event.target.value };
    });

    this.setState({ productList: lineItems });
  };

  updateChange_quantity = (index) => (event) => {
    let lineItems = this.state.productList.map((items, i) => {
      if (index !== i) return items;

      return { ...items, [event.target.name]: event.target.value };
    });

    this.setState({ productList: lineItems });
  };

  render() {
    return (
      <div className="main-div">
        <h1>INVOICE</h1>
        <div className="item">
          <h3>Items</h3>
          <h3>Quantity</h3>
        </div>
        {/* <div className="item_count">
          <h3>Buy laptops</h3>
          <h3>5</h3>
        </div> */}
        {this.state.productList.map((item, i) => {
          if (i !== 0)
            return (
              <div className="item_count">
                <textarea
                  onChange={this.updateChange_details}
                  placeholder="enter product name"
                  type="text"
                >
                  {item.product}
                </textarea>
                <textarea
                  onChange={this.updateChange_quantity}
                  placeholder="enter product quantity"
                  type="text"
                >
                  {item.quantity}
                </textarea>
              </div>
            );
        })}
        <div className="item_count--button">
          <h3 onClick={this.onAddProduct}>
            <AddIcon /> Add new product
          </h3>
        </div>
      </div>
    );
  }
}

export default Product;
