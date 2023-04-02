import React from "react";
import useStateManager from "../hooks/useStateManager";

const Form = ({ state }) => {
  const { state: s, handleChange } = useStateManager(state);
  return <form></form>;
};

export default Form;
