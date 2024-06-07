import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import MainPage from "./pages/MainPage";
import Dashboard from "./pages/Dashboard";
import Workspace from "./pages/Workspace";
import UIUXCourse from "./pages/UIUXCourse";
import JavaUdemy from "./pages/JavaUdemy";
import Kangji from "./pages/Kangji";
import CreateNewWorkspace from "./pages/CreateNewWorkspace";
import UserInfo from "./pages/UserInfo";
function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Navigate to="/signin" />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />

        <Route path="/user-info" element={<MainPage />}>
          <Route index element={<UserInfo />} />
          <Route path="setting" element={<UserInfo chooseBtn={"settings"} />} />
          <Route path="edit" element={<UserInfo chooseBtn={"edit"} />} />
          <Route
            path="security"
            element={<UserInfo chooseBtn={"security"} />}
          />
        </Route>
        <Route path="/dashboard" element={<MainPage />}>
          <Route index element={<Dashboard />} />
        </Route>
        <Route path="/workspace" element={<MainPage />}>
          <Route index element={<Workspace />} />
          <Route path="uiuxcourse" element={<UIUXCourse />} />
          <Route path="javacourse" element={<JavaUdemy />} />
          <Route path="kanji" element={<Kangji />} />
          <Route path="createworkspace" element={<CreateNewWorkspace />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
