import { useDispatch } from "react-redux";
import { delUserById } from "../../redux/user/userOperations";
import s from "./CardUser.module.scss";

const CardUser = ({ contact }) => {
const dispatch=useDispatch();
  const handleDelete = (e) => {
    const _id = e.target.value;
    console.log("_id :>> ", _id);
    dispatch(delUserById(_id))
  };

  return (
    <div className={s.card}>
      <div className={s.usercard}>
        <p className={s.card__name}>{contact.name}</p>
        <p className={s.card__email}>{contact.email}</p>
        <button
          value={contact._id}
          className={s.btn}
          onClick={(e) => handleDelete(e)}
        >
          Delete "{contact.name}"
        </button>
      </div>
    </div>
  );
};

export default CardUser;
