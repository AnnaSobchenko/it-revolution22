import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllUsers } from "../../redux/user/userOperations";
import { getUsers } from "../../redux/user/userSelector";
// import Icons from "../../images/symbol-defs.svg";
import s from "./UsersPage.module.scss";

const UsersPage = ({ openModal }) => {
  const dispatch = useDispatch();

  //   const getQuestions = (e) => {
  //     const btnValue = e.target.innerText;
  //     dispatch(testingType(btnValue));
  //     dispatch(questions(btnValue));
  //   };

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  const users = useSelector(getUsers);

  return (
    <section className={`container ${s.main}`}>
      <ul className={s.list}>
        {users.map((user) => (
          <li
            key={user._id}
            onClick={() => {
              openModal(user);
            }}
          >
            <p className={s.text__name}>{user.name}</p>
            <p className={s.text__email}>{user.email}</p>
            <button className={s.btn}>delete</button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default UsersPage;
