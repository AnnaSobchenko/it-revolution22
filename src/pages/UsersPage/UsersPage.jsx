import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Modal from "../../components/Modal/Modal";
import { getInfo } from "../../redux/auth/authOperations";
import { getAllUsers } from "../../redux/user/userOperations";
import { getUsers } from "../../redux/user/userSelector";
// import Icons from "../../images/symbol-defs.svg";
import s from "./UsersPage.module.scss";

const UsersPage = () => {
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
  const [modal, setModal] = useState({
    open: false,
    content: null,
  });

  const openModal = (content) => {
    setModal({
      open: true,
      content,
    });
  };

  const closeModal = () => {
    setModal({
      open: false,
      content: null,
    });
  };
  const handleOpenModal = (e) => {
    const value = e.currentTarget.value;
    const user = dispatch(getInfo(value));
    console.log("~ user", user);

    // openModal(user);
  };

  return (
    <section className={`container ${s.main}`}>
      <ul className={s.list}>
        {users.map((user) => (
          <li
            key={user._id}
            value={user.email}
            onClick={(e) => handleOpenModal(e)}
          >
            <p className={s.text__name}>{user.name}</p>
            <p className={s.text__email}>{user.email}</p>
            <button className={s.btn}>delete</button>
          </li>
        ))}
      </ul>
      {modal.open && (
        <Modal handleClose={closeModal} checker={true}>
          {/* {modal.content} */}
        </Modal>
      )}
    </section>
  );
};

export default UsersPage;
