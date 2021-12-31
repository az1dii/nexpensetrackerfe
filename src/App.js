import AllTransactions from "./pages/AllTransactions"
import SingleTransaction from "./pages/SingleTransaction"
import Form from "./pages/Form"

import './App.css';

// import React Hooks
import {useState, useEffect} from "react"

// Import React Router Components
import {Route, Switch} from "react-router-dom"




function App(props) {

  ////////////////////
  // Style Objects
  ////////////////////
  const h1 = {
    textAlign: "center",
    margin: "10px",
  };

  //////////////////
  // State & Other Variables
  //////////////////
  //api url
  const url ="https://newexpenset.herokuapp.com/transactions/"

  // state to hold list of transactions
  const [transactions, setTransactions] = useState([])

  //////////////
  // Functions
  //////////////
  const getLists = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setTransactions(data);
  };

  //////////////
  // useEffects
  //////////////
  useEffect(() => {
    getLists();
  }, []);


  /////////////////////
  // returned JSX
  /////////////////////
  return (
    <div className="App">
      <h1 style ={h1}>My Transaction List</h1>
      <Switch>
        <Route
          exact
          path = "/"
          render={(routerProps) => {
            return <AllTransactions {...routerProps}/>}}
        />
        <Route
          path="/transaction/:id"
          render={(routerProps) => {
            return <SingleTransaction {...routerProps}
          transactions={transactions}/>}}
        />
        <Route
          path="/new"
          render={(routerProps) => {
            return <Form {...routerProps} />}}
        />
        <Route
          path="/edit"
          render={(routerProps) => {
            return <Form {...routerProps} />}}
        />
      </Switch>
    </div>
  );
}

export default App;
