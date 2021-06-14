import React from "react";

export default function ValidateInfo(inputs, excluded) {
  let errors = {};

  //EMAIL
  if(excluded && excluded.includes("email")){
    errors.email = "success";
  }
  else if (!inputs.email) {
    errors.email = "error";
  } else if (!/\S+@\S+\.\S+/.test(inputs.email)) {
    errors.email = "error";
  } else {
    errors.email = "success";
  }

  //USERNAME
  if (!inputs.username) {
    errors.username = "error";
  } else if (!/^[A-Za-z]+/.test(inputs.username.trim())) {
    errors.username = "error";
  } else {
    errors.username = "success";
  }

  //PASSWORD
  if (!inputs.password) {
    errors.password = "error";
  } else if (inputs.password.length < 6) {
    errors.password = "error";
  } else {
    errors.password = "success";
  }

  return errors;
}
