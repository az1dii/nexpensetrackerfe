import React from "react";
import { Link } from "react-router-dom";

const Transaction = ({ transaction }) => {
  //////////////////
  // Style Objects
  //////////////////
  const div = {
    textAlign: "center",
    size: "10rem",
    border: "3px solid",
    margin: "2px auto",
    width: "40%",
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