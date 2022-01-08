// Import useState hook
import React, { useState } from "react";

//destructure out props, including router prop history
const Form = ({ initialList, handleSubmit, buttonLabel, history }) => {

  const formstyle = {
    textAlign:"center",
    border: "3px solid gray",
    width: "30%",
    margin: "0px auto"
  }

  
  ////////////////
  // The Form Data State
  ////////////////
  // Initiallize the form with the initialList state
  const [formData, setFormData] = useState(initialList);

  //////////////////////////
  // Functions
  //////////////////////////
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  // Function to run when form is submitted
  const handleSubmisson = (event) => {
    //prevent form refresh
    event.preventDefault();
    //pass formData to handleSubmit prop function
    handleSubmit(formData);
    //push user back to main page
    history.push("/alltransactions");
  };

  // Our Form, an input for the subject and details fields and a submit button
  return (
    <div style = {formstyle}>
      <form onSubmit={handleSubmisson}>
        <input
          type="text"
          onChange={handleChange}
          value={formData?.name}
          name="name"
          placeholder="NAME"
        />
        <input
          type="number"
          onChange={handleChange}
          value={formData?.amount}
          name="amount"
          placeholder="AMOUNT"
        />
        <input
          type="text"
          onChange={handleChange}
          value={formData?.detail}
          name="detail"
          placeholder="DETAIL"
        />
        <input type="submit" value={buttonLabel} />
      </form>
    </div> 
  );
}
export default Form;