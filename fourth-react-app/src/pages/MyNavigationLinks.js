import { Link } from "react-router-dom";

function MyNavigationLinks() {
  return (
    <>
      <Link to={"/home"}>Home |</Link>
      <Link to={"/todo"}>Todo |</Link>
      <Link to={"/todolist"}>Todo List |</Link>
      <Link to={"/registration"}>Registration |</Link>
      <Link to={"/userlist"}>userList</Link>

    </>
  );
}
 export default MyNavigationLinks ;