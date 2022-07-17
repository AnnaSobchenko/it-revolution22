import s from "./ContactList.module.scss";

const contacts = [
  {
    id: 1,
    name: "vadim",
    mail: "vadim@gmail.com",
  },
  {
    id: 2,
    name: "vadim",
    mail: "vadim@gmail.com",
  },
];
const ContactList = () => {
  return (
    <div>
      <ul className={s.items}>
        {contacts.map(({ id, name, mail }) => (
          <li key={id} className={s.item}>
            <p>{name}</p>
            <p>{mail}</p>
            <button type="submit" className={s.btn}>
              delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
