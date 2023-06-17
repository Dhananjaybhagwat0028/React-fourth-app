import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyTodo from "./pages/MyTodo";
import MyRegistration from "./pages/MyRegistration";
import MyNavigationLinks from "./pages/MyNavigationLinks";
import MyTodoList from "./pages/MyTodoList";
import MyNavigationLinksUsingButton from "./pages/MyNavigationLinksUsingButton";
import MyUserList from "./pages/MyUserList";
import ValidationDemo from "./pages/ValidationDemo";
import AppHome from "./pages/AppHome";

function App() {
  return (
    <>
      <BrowserRouter>
        <MyNavigationLinks />

        <Routes>
          {/** 1 Route means 1 Page */}
          <Route path="/" element={<h1>Hello</h1>} />
          <Route path="/home" element={<AppHome/>} />
          <Route path="/todo" element={<MyTodo />} />
          <Route path="/todolist" element={<MyTodoList />} />
          <Route path="/registration" element={<MyRegistration />} />
          <Route path="/userlist" element={<MyUserList />} />
          <Route path="/validation-demo" element={<ValidationDemo />} />
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
        {/* <MyNavigationLinksUsingButton /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
