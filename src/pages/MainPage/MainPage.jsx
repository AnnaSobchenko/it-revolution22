import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import AddForm from "../../components/AddForm/AddForm";
import ContactList from "../../components/ContactList/ContactList";
import Filter from "../../components/Filter/Filter";
// import Icons from "../../images/symbol-defs.svg";
import s from "./MainPage.module.scss";

const MainPage = () => {
  //   const dispatch = useDispatch();

  //   const getQuestions = (e) => {
  //     const btnValue = e.target.innerText;
  //     dispatch(testingType(btnValue));
  //     dispatch(questions(btnValue));
  //   };

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
