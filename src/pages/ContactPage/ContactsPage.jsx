import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
// import Icons from "../../images/symbol-defs.svg";
import s from "./ContactsPage.module.scss";

const ContactsPage = ({openModal}) => {
//   const dispatch = useDispatch();

//   const getQuestions = (e) => {
//     const btnValue = e.target.innerText;
//     dispatch(testingType(btnValue));
//     dispatch(questions(btnValue));
//   };

const cont = []
  return (
    <section className={`container ${s.main}`}>
      <p className={s.main__description}>
        “Regression testing. What is it?
        <br />
        If the system compiles, that's good, if it boots, that's great!”
      </p>
      <span className={s.main__line}></span>
      <p className={s.main__author}>Linus Torvalds</p>
      <p className={s.main__authorDescription}>
        Linux kernel creator, hacker, 1969
      </p>

      
      <div className={s.btn__wrapper}>

      {cont.map((cont) => (
        <li
          className={s.contactItem}
          key={cont._id}
          onClick={() => {
            openModal(cont);
          }}
        >
          {/* <img
            className={s.avatar}
            src={
              renderCheck(cont.avatar)
                ? `${process.env.REACT_APP_BASE_URL}/avatar/${cont.avatar}`
                : "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Avatar-placeholder.jpg/1200px-Avatar-placeholder.jpg"
            }
            alt={cont.name}
          /> */}

          {/* <div className={s.conatcInf}>
            <p className={s.name}>
              {renderCheck(cont.name) ? cont.name : "Name Not Found"}
            </p>
            <p className={s.jodTitle}>
              {renderCheck(cont.job_title)
                ? cont.job_title
                : "Job title Not Found"}
            </p>
            <p className={s.comment}>
              {renderCheck(cont.comment) ? cont.comment : "Comment Not Found"}
            </p>
          </div> */}
        </li>))}


        {/* <Link
          className={s.btn__QA}
          to={"/test/technical"}
          onClick={getQuestions}
        >
          <span className={s.btn__QaDescription}>QA technical training</span>

          <svg className={s.btn__icon} width="24px" height="16px">
            <use xlinkHref={`${Icons}#icon-right-white`} />
          </svg>
        </Link>
        <Link
          className={s.btn__test}
          to={"/test/theory"}
          onClick={getQuestions}
        >
          <span className={s.btn__testDescription}>Testing theory</span>
          <svg className={s.btn__icon} width="24px" height="16px">
            <use xlinkHref={`${Icons}#icon-right-white`} />
          </svg>
        </Link> */}
      </div>
    </section>
  );
};

export default ContactsPage;