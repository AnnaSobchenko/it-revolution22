import AddForm from "../../components/AddForm/AddForm";
import ContactList from "../../components/ContactList/ContactList";
import Filter from "../../components/Filter/Filter";
import s from "./MainPage.module.scss";

const MainPage = () => {
  return (
    <section className={`container ${s.main}`}>
      <div className={s.contact_wrapper}>
        <div className={s.contact}>
          <AddForm />
          <Filter />
          <ContactList />
        </div>
      </div>
    </section>
  );
};

export default MainPage;
