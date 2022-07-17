import s from "./CardUser.module.scss";

const CardUser = ({ contact }) => {
  return (
    <div className={s.card}>
      <div className={s.usercard}>
        <p className={s.card__name}>{contact.name}</p>
        <p className={s.card__email}>{contact.email}</p>
      </div>
    </div>
  );
};

export default CardUser;
