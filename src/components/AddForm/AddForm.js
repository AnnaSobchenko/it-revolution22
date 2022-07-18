import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserEmail } from "../../redux/auth/authSelector";
import {
  addUserContact,
  updateUserContact,
} from "../../redux/user/userOperations";
import { getUserPhoneForm } from "../../redux/user/userSelector";
import { onPhoneFormReset } from "../../redux/user/userSlice";
import s from "./AddForm.module.scss";

export default function AddForm() {
  const phoneForm = useSelector(getUserPhoneForm);

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

  const addContact = async () => {
    // phoneForm.id
    //   ? dispatch(
    //       updateUserContact({
    //         name,
    //         number,
    //         email: userEmail,
    //         id: phoneForm.id,
    //       })
    //     )
    //   : dispatch(addUserContact({ name, number, email: userEmail }));
    // await dispatch(onPhoneFormReset({}));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    phoneForm.id
      ? await dispatch(
          updateUserContact({
            name,
            number,
            email: userEmail,
            id: phoneForm.id,
          })
        )
      : await dispatch(addUserContact({ name, number, email: userEmail }));
    await dispatch(onPhoneFormReset({ name: "", number: "", id: "" }));
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
            value={name ? name : phoneForm.name}
            // value={name }
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
            // value={number}
            value={number ? number : phoneForm.number}
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
