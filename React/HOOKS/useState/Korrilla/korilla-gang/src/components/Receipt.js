import React from "react";

function Receipt(props) {
  return (
    <div className="ticket">
     Customer Name: <br/><h4>{props.receipt.person}</h4>
      <h2 className="request"> {props.receipt.order.main}</h2>
      <li> {props.receipt.order.protein}</li>
      <li> {props.receipt.order.rice}</li>
      <li> {props.receipt.order.sauce}</li>
      <li> {props.receipt.order.drink}</li>
      <h3 className="price">$ {props.receipt.order.cost}.00</h3>
      <h2 className="ledger">{props.receipt.paid? "Customer Paid":"Unpaid Customer"}</h2>
    </div>
  );
}

export default Receipt;
