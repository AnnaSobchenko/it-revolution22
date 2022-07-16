import "./App.scss";
import { Suspense, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { useDispatch, useSelector, Provider } from "react-redux";

import Loader from "./components/_shared/Loader/Loader";
import AppBar from "./components/_navigations/AppBar/AppBar";
import AuthForm from "./components/AuthForm/AuthForm";
function App() {
  return (
    <div className="content">
      <div>
        <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<AuthForm />}>
                {/* <Route
                index
                element={isLoggedIn ? <MainPage /> : <Navigate to="auth" />}
              />
              <Route path="contacts" element={<ContactsPage />} />
              <Route element={<PublicRoute />}>
                <Route path="auth" element={<AuthPage />} />
              </Route>
              <Route element={<PrivateRoute />}>
                <Route path="test/:type" element={<TestPage />} />
                <Route path="result" element={<ResultPage />} />
                <Route path="materials" element={<MaterialsPage />} />
                
              </Route>
              <Route path="*" element={<RedirectNew to="/" replace />} /> */}
              </Route>
            </Routes>
        </Suspense>
      </div>
    </div>
  );
}

export default App;
