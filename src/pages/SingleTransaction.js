import React from "react";
import { Link } from "react-router-dom";

// destructuring the props needed to get our transaction, including router prop match
const SingleTransaction = ({ transactions, match, edit, deleteList }) => {
  const id = parseInt(match.params.id); //get the id from url param
  const transaction = transactions.find((transaction) => transaction.id === id);
    ///////////////////
    // Style objects
    ////////////////////
    const div = {
        textAlign:"center",
        border: "3px solid gray",
        width: "90%",
        margin: "30px auto"
    }

    return (
        <div style={div}>
            <h1>{transaction?.name}</h1>
            <h2>$ {transaction?.amount}</h2>
            <h2>{transaction?.detail}</h2>
            <button onClick={(event) => edit(transaction)}>Edit</button>
            <button onClick={(event) => deleteList(transaction)}>Delete</button>
            <Link to="/alltransactions">
                <button>go back</button>
            </Link>
        </div>
    );
};

export default SingleTransaction;




