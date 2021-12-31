import React from "react"
import Transaction from "../components/transaction"

const AllTransactions= (props) => {
    return props.transactions.map((transaction) => {
        return <Transaction key={transaction.id} transaction={transaction}/>
    })
}


export default AllTransactions;



