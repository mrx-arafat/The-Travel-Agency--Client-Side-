import { ButtonBase } from "@mui/material";
import axios from "axios";
import React from "react";
import Button from "@mui/material/Button";

import SendIcon from "@mui/icons-material/Send";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./AddService.css";
import Navigation from "../../../Shared/Navigation/Navigation";
import Footer from "../../../Shared/Footer/Footer";
const AddService = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { user } = useAuth();
  const onSubmit = (data) => {
    console.log(data);
    axios.post("http://localhost:5000/services", data).then((res) => {
      if (res.data.insertedId) {
        alert("Service Added successfully");
        reset();
      }
    });
  };

  return (
    <div>
      <Navigation></Navigation>
      <h1>Add A Service</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="input"
          {...register("name")}
          placeholder="Service Name"
        />{" "}
        <br />
        <input
          className="input"
          {...register("description")}
          placeholder="Description"
        />{" "}
        <br />
        <input className="input" {...register("price")} placeholder="$50000" />
        <br />
        <input className="input" {...register("img")} placeholder="image URL" />
        <br />
        <br />
        <input type="submit" />
      </form>
      <br />
      <NavLink to="/services">
        <Button variant="contained" endIcon={<SendIcon />}>
          Services
        </Button>
      </NavLink>
      <Footer></Footer>
    </div>
  );
};

export default AddService;
