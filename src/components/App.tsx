import React from "react";
import NavBar from "./NavBar";
import TodoList from "./TodoList";

const App = () => {
  return (
    <div className="uk-container">
      <NavBar></NavBar>
      <TodoList></TodoList>
    </div>
  );
};

export default App;
