import { getFilterValue, getUserContacts } from "../../redux/user/userSelector";
import s from "./ContactList.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { getUserEmail } from "../../redux/auth/authSelector";
import { delUserContact, getContact } from "../../redux/user/userOperations";
import { useEffect } from "react";
import { onContactUpdate } from "../../redux/user/userSlice";

const ContactList = () => {
  const userFilterValue = useSelector(getFilterValue);
  const userEmail = useSelector(getUserEmail);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContact({ email: userEmail }));
  }, []);

  // const updateContact = async ({ id, name, number }) => {
  //   await dispatch(onContactUpdate({ id, name, number }));
  // };

  const delContact = async (id) => {
    await dispatch(delUserContact({ contactId: id, email: userEmail }));
    dispatch(getContact({ email: userEmail }));
  };

  return (
    <div>
      <ul className={s.items}>
        {userFilterValue.map(({ id, name, number }) => (
          <li key={id} className={s.item}>
            <p>{name}</p>
            <p>{number}</p>
            {/* <button
              type="submit"
              className={s.btn}
              onClick={() => updateContact({ id, name, number })}
            >
              update
            </button> */}
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
