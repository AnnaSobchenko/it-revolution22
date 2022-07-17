
import { React, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Icons from "../../../images/symbol-defs.svg";
import s from "./AppBar.module.scss";
import MediaQuery from "react-responsive";
import { useDispatch, useSelector } from "react-redux";
// import Modal from "../Modal/Modal";
// import BurgerMenu from "../BurgerMenu/BurgerMenu";
import { getIsLoggedIn, getUserEmail, getUserName } from "../../../redux/auth/authSelector";
import { logout } from "../../../redux/auth/authOperations";
import { getAllUsers } from "../../../redux/user/userOperations";

const Logo=require("../../../images/logo.png")

const AppBar = () => {
  const userInfo = useSelector(getUserName);
  const isLoggedIn = useSelector(getIsLoggedIn);
  const dispatch = useDispatch();

//   const [modal, setModal] = useState({
//     open: false,
//     content: null,
//   });

//   const openModal = (content) => {
//     setModal({
//       open: true,
//       content,
//     });
//   };

//   const closeModal = () => {
//     setModal({
//       open: false,
//       content: null,
//     });
//   };

  return (
    <>
      <header className={s.header}>
        <div className={s.logo}>
          <NavLink to="/">
            <img src={Logo} alt="logo" />
            {/* <svg className={s.navIcon} width="129px" height="28px">
              <use xlinkHref={`${Icons}#icon-logo`} />
            </svg> */}
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
            // onClick={()=>dispatch(getAllUsers)}
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