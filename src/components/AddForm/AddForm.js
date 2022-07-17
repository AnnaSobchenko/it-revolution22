import React, { useState } from "react";
import { useDispatch } from "react-redux";
import s from "./AddForm.module.scss";
export default function AddForm() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const dispatch = useDispatch();
  const handleChange = (event) => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setName("");
    setNumber("");
  };
  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <div className={s.label_wrapper}>
        <label className={s.label}>
          Name
          <input
            autoComplete="off"
            type="text"
            name="name"
            className={s.input}
            value={name}
            onChange={handleChange}
          />
        </label>
        <label className={s.label}>
          Number
          <input
            autoComplete="off"
            type="text"
            name="number"
            className={s.input}
            value={number}
            onChange={handleChange}
          />
        </label>
      </div>
      <button type="submit" className={s.btn}>
        Add contact
      </button>
    </form>
  );
}
