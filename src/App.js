import "./App.scss";
import { Suspense, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import { useDispatch, useSelector, Provider } from "react-redux";

import Loader from "./components/_shared/Loader/Loader";
import AppBar from "./components/_navigations/AppBar/AppBar";
import PrivateRoute from "./components/_routs/PrivatRoute";
import PublicRoute from "./components/_routs/PublicRoute";
import { getIsLoggedIn } from "./redux/auth/authSelector";
import MainPage from "./pages/MainPage/MainPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import ContactPage from "./pages/ContactPage/ContactsPage";
import ContactsPage from "./pages/ContactPage/ContactsPage";
// import AuthForm from "./components/AuthForm/AuthForm";
function App() {

  const isLoggedIn = useSelector(getIsLoggedIn);


  return (
    <div className="content">
      <div>
        <Suspense fallback={<Loader />}>
            <Routes>
            <Route path="/" element={<AppBar />}>
              {/* <Route path="/" element={<AuthForm />}> */}
                <Route
                index
                element={isLoggedIn ? <MainPage /> : <Navigate to="login" />}
              />
              <Route path="contacts" element={<ContactsPage />} />
              <Route element={<PublicRoute />}>
                <Route path="login" element={<LoginPage />} />
                <Route path="register" element={<RegisterPage />} />
              </Route>
              {/* <Route element={<PrivateRoute />}>
                <Route path="test/:type" element={<TestPage />} />
                <Route path="result" element={<ResultPage />} />
                <Route path="materials" element={<MaterialsPage />} />
                
              </Route> */}
              {/* <Route path="*" element={<RedirectNew to="/" replace />} /> */}
              </Route>
            </Routes>
        </Suspense>
      </div>
    </div>
  );
}

export default App;
