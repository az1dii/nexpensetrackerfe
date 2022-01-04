import AllTransactions from "./pages/AllTransactions"
import SingleTransaction from "./pages/SingleTransaction"
import Form from "./pages/Form"

import './App.css';

// import React Hooks
import {useState, useEffect} from "react"

// Import React Router Components
import {Route, Switch, Link} from "react-router-dom"




function App(props) {

  ////////////////////
  // Style Objects
  ////////////////////
  const h1 = {
    textAlign: "center",
    margin: "10px",
  };

  const button = {
    backgroundColor: "navy",
    display: "block",
    margin: "auto"
  }

  //////////////////
  // State & Other Variables
  //////////////////
  //api url
  const url ="https://newexpenset.herokuapp.com/transactions/"

  // state to hold list of transactions
  const [transactions, setTransactions] = useState([])

  // an object that represents a null List
  const nullList = {
    name: "",
    amount: "",
    detail: "",
  };

  const [targetList, setTargetList] = useState(nullList)
  // const stat to hold List for editing

  //////////////
  // Functions
  //////////////
  const getLists = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setTransactions(data);
  };

  // Function to add list from form data
  const addLists = async (newList) => {
    const response = await fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newList),
    })
    getLists();
  }

  const getTargetList = (List) => {
    setTargetList(List);
    props.history.push("/edit");
  }

  const updateList = async (list) => {
    const response = await fetch(url + list.id + "/", {
      method: "put",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(list),
    });

    // get updated list of lists
    getLists();
  }

   // Function to edit todo on form submission
   const deleteList= async (list) => {
    const response = await fetch(url + list.id + "/", {
      method: "delete",
    });

    // get updated list of lists
    getLists();
    props.history.push("/");
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
      <Link to="/new"><button style={button}>Create New List</button></Link>
      
      <Switch>
        <Route
          exact
          path = "/"
          render={(rp) => {
            return <AllTransactions {...rp}
            transactions={transactions}/>}}
        />
        <Route
          path="/transaction/:id"
          render={(rp) => {
            return <SingleTransaction {...rp}
            transactions={transactions}
            edit={getTargetList}
            deleteList={deleteList}
            />
          }}
        />
        <Route
          path="/new"
          render={(rp) => {
            return <Form {...rp} 
            initialList={nullList}
            handleSubmit={addLists}
            buttonLabel="Add Transaction"
            />
          }}
        />
        <Route
          path="/edit"
          render={(rp) => {
            return <Form {...rp} 
            initialList={targetList}
            handleSubmit={updateList}
            buttonLabel="update list"
            />
          }}
        />
      </Switch>
    </div>
  );
}

export default App;
