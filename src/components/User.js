import React, { useEffect, useState } from "react";

const User = (props) => {

  return (
    <div className="user-card">
      <h2>Name: {props.name}</h2>
      <h3>Location: Dehradun</h3>
      <h4>Contact: jaydeeps96</h4>
    </div>
  );
};

export default User;
