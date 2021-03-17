import React, { useState } from "react";

export const Username = (values) => {

    const [error, setError] = useState("")

    if(!values.username){
        setError("Please fill out information")
    } else if(values.username.length < 6){
        setError("Username must be longer than 6 characters")
    }

  return (
    <div className="form_input-group ">
      <input
        type="text"
        name="username"
        className="form_input"
        placeholder="Username"
        value={values.username}
      />
      <div value={error} />
    </div>
  );
};
