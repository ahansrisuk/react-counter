import React from "react";

const Button = ({ increment, onClickFunction }) => {
  const handleClick = () => {
    onClickFunction(increment);
  };
  return <button onClick={handleClick}>+{increment}</button>;
};

// function Button(props) {
//   return <button>+{props.increment}</button>;
// }

export default Button;
