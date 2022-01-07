import React from "react";
import { Link } from "react-router-dom";

const Transaction = ({ transaction }) => {
  //////////////////
  // Style Objects
  //////////////////
  const div = {
    textAlign: "left",
    border: "3px solid",
    margin: "10px auto",
    width: "80%",
  };
  return (
    <div style={div}>
      <Link to={`/transaction/${transaction.id}`}>
        <h1>{transaction.name}</h1>
      </Link>
      <h2>$ {transaction.amount}</h2>
      <h2>{transaction.detail}</h2>
    </div>
  );
};

export default Transaction;