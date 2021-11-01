import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import "./AddService.css";
const AddService = () => {
  const {
    register,
    handleSubmit,

    reset,
  } = useForm();

  const onSubmit = (data) => {
    axios.post("http://localhost:4000/services", data).then((res) => {
      console.log(res);
      alert("added successfully");
      reset();
    });
  };

  return (
    <div>
      <h2>please add a services</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name")} placeholder="name" />

        <input {...register("description")} placeholder="description" />
        <input {...register("price")} placeholder="price" />
        <input {...register("img")} placeholder="img url" />

        <input type="submit" />
      </form>
    </div>
  );
};

export default AddService;
