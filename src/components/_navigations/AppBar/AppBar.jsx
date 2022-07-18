
import { React } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Icons from "../../../images/symbol-defs.svg";
import s from "./AppBar.module.scss";
import MediaQuery from "react-responsive";
import { useDispatch, useSelector } from "react-redux";
import { getIsLoggedIn, getUserName } from "../../../redux/auth/authSelector";
import { logout } from "../../../redux/auth/authOperations";

const Logo=require("../../../images/logo.png")

const AppBar = () => {
  const userInfo = useSelector(getUserName);
  const isLoggedIn = useSelector(getIsLoggedIn);
  const dispatch = useDispatch();

  return (
    <>
      <header className={s.header}>
        <div className={s.logo}>
          <NavLink to="/">
            <img src={Logo} alt="logo" />           
          </NavLink>
        </div>
        <div className={s.header_navLink}>

          {isLoggedIn && (
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? s.activeStyle : s.link)}
            >
              Phonebook
            </NavLink>
          )}
          {!isLoggedIn && (
            <NavLink
              to="/login"
              className={({ isActive }) => (isActive ? s.activeStyle : s.link)}
            >
              Login
            </NavLink>
          )}
          {!isLoggedIn && (
            <NavLink
              to="/register"
              className={({ isActive }) => (isActive ? s.activeStyle : s.link)}
            >
              Register
            </NavLink>
          )}
         
         {isLoggedIn && <NavLink
            to="/contacts"
            className={({ isActive }) => (isActive ? s.activeStyle : s.link)}
          >
            Users
          </NavLink>}
        </div>
        <>
          {isLoggedIn && (
            <div className={s.flex}>
              <div className={s.name_wrapper}>
                <div className={s.letter_wrapper}>
                  {userInfo.slice(0, 1) && (
                    <span className={s.firs_letter}>
                      {userInfo.slice(0, 1)}
                    </span>
                  )}
                </div>

                {userInfo && (
                  <div className={s.text_transform}>
                    <span className={`${s.name} ${s.animation__scss}`}>
                      {userInfo}
                    </span>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* <MediaQuery maxWidth={767}>
            <button onClick={openModal} className={s.navIcon_btn}>
              <svg className={s.navIconMenu} width="20px" height="20px">
                <use xlinkHref={`${Icons}#icon-menu`} />
              </svg>
            </button>
            {modal.open && (
              <Modal handleClose={closeModal} checker={true}>
                <BurgerMenu closeModal={closeModal} />
              </Modal>
            )}
          </MediaQuery> */}

          <MediaQuery minWidth={768}>
            {isLoggedIn && (
              <NavLink
                to="/login"
                onClick={() => {
                  dispatch(logout());
                }}
              >
                <div className={s.navIconMenu_wrapper}>
                  <svg className={s.navIcon_signOut} width="16px" height="16px">
                    <use xlinkHref={`${Icons}#icon-sign-out`} />
                  </svg>
                </div>
              </NavLink>
            )}
          </MediaQuery>
        </>
      </header>
      <Outlet className="container" />
    </>
  );
};

export default AppBar;