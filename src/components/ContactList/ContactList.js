import { getUserContacts } from "../../redux/user/userSelector";
import s from "./ContactList.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { getUserEmail } from "../../redux/auth/authSelector";
import {
  delUserContact,
  getUserContact,
} from "../../redux/user/userOperations";
import { useEffect } from "react";

const ContactList = () => {
  const userContacts = useSelector(getUserContacts);
  const userEmail = useSelector(getUserEmail);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserContact({ email: userEmail }));
  }, []);

  const delContact = (id) => {
    dispatch(delUserContact({ id, email: userEmail }));
  };
  return (
    <div>
      <ul className={s.items}>
        {userContacts.map(({ id, name, number }) => (
          <li key={id} className={s.item}>
            <p>{name}</p>
            <p>{number}</p>
            <button
              type="submit"
              className={s.btn}
              onClick={() => delContact(id)}
            >
              delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
