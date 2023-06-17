
import { useNavigate } from "react-router-dom";

function MyNavigationLinksUsingButton() {
  const navigate = useNavigate();

  let goToHomeAction = () => {
    navigate("/home");
  };
  let goToTodoAction = () => {
    navigate("/todo");
  };
  let goToTodoListAction = () => {
    navigate("/todoList");
  };
  let goToRegistrationAction = () => {
    navigate("/registration");
  };
  let goToUserListAction = () => {
    navigate("/userlst");
  };

  return (
    <div>
      <input type="button" value="Home" onClick={goToHomeAction} />
      <input type="button" value="Todo" onClick={goToTodoAction} />
      <input type="button" value="TodoList" onClick={goToTodoListAction} />
      <input type="button" value="Registartion" onClick={goToRegistrationAction} />
      <input type="button" value="UserList" onClick={goToUserListAction} />
    </div>
  );
}

export default MyNavigationLinksUsingButton;