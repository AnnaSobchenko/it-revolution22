import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserEmail } from "../../redux/auth/authSelector";
import { addUserContact } from "../../redux/user/userOperations";
import s from "./AddForm.module.scss";
export default function AddForm() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const dispatch = useDispatch();
  const userEmail = useSelector(getUserEmail);

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

  const addContact = () => {
    dispatch(addUserContact({ name, number, email: userEmail }));
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
      <button type="submit" className={s.btn} onClick={addContact}>
        Add contact
      </button>
    </form>
  );
}
