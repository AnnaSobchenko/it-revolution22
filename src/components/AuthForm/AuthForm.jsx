import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { signin, signup } from "../../redux/auth/authOperations";
import { addIsAdmin } from "../../redux/auth/authSlice";
import { authValidationSchema } from "../../utils/validation/AuthValid";
import LabelForm from "../_shared/LabelForm/LabelForm";
import s from "./AuthForm.module.scss";
// import Button from "../Button/Button";

const AuthForm = ({ isAuth }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={authValidationSchema}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <div className={s.authForm}>
            <h2 className={s.authFormTitle2}>
              {isAuth ? "Register:" : "Login:"}
            </h2>
            <form onSubmit={handleSubmit} className={s.authFormInput}>
              {isAuth && (
                <LabelForm
                  type="name"
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  values={values}
                />
              )}
              <LabelForm
                type="email"
                handleChange={handleChange}
                handleBlur={handleBlur}
                values={values}
              />
              <LabelForm
                type="password"
                handleChange={handleChange}
                handleBlur={handleBlur}
                values={values}
              />

              <div className={s.btn}>
                {/* <button>sign in</button> */}
                <NavLink
                  to="/"
                  onClick={() => {
                    toast.success(
                      "A letter has been sent to your e-mail address, follow the link in the letter"
                    );
                    dispatch(!isAuth ? signin(values) : signup(values));
                    values.email === "admin@mail.com" && dispatch(addIsAdmin());
                  }}
                >
                  submit
                </NavLink>
                {/* <Button
                  cta="sign in"
                  signButton
                  value="signin"
                   onClick={() => dispatch(signin(values))}
                />

                <Button
                  cta="sign up"
                  signButton
                  secondary
                  value="signup"
                   onClick={() => {
                     console.log("sign up", values);
                     return dispatch(signup(values));
                   }}
                /> */}
              </div>
            </form>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default AuthForm;
