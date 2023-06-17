import { useRef, useState } from "react";
import MyTodo from "./pages/MyTodo";
import MyRegistration from "./pages/MyRegistration";
function App() {
  return (
    <>
      <h1>My Todo</h1>
      <MyTodo />
       <hr />
      <MyRegistration />
    </>
  );
}



export default App;
