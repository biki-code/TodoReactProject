import TodoList from "../components/TodoList";
import Modal from "../components/Modal";
import { useState } from "react";
import Button from "../components/Button";

const Index = () => {
  const defaultTodo = {
    title: "",
    deadline: "",
    status: "status",
    index: null,
  };

  const [todoData, setTodoData] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentTodo, setCurrentTodo] = useState(defaultTodo);
  const [operation, setOperation] = useState(null)

  const handleAddTodo = () => {
    console.log(currentTodo);
    setTodoData([...todoData, currentTodo]);
  };

  const handleUpdateTodo = () => {
    console.log(`Component at ${currentTodo.index} is to be updated`);
    const newTodoData = [...todoData];
    newTodoData[currentTodo.index] = currentTodo;
    setTodoData(newTodoData);

    // reset currentTodo after updating
    setCurrentTodo(defaultTodo);
  };

  const handleSetCurrentTodo = (todo, index) => {
    const { title, deadline, status } = todo;
    console.log({ title, status, deadline, index });
    setCurrentTodo({ title, status, deadline, index });
  };

  return (
    <>
      <Modal
        handleAddTodo={handleAddTodo}
        handleUpdateTodo={handleUpdateTodo}
        handleCloseModal={() => setModalIsOpen(false)}
        currentTodo={currentTodo}
        setCurrentTodo={setCurrentTodo}
        modalIsOpen={modalIsOpen}
        operation={operation}
        setOperation={setOperation}
      />
      <Button
        buttonText={"Add a new todo"}
        twButtonBgColor={"bg-blue-600"}
        handleOnClick={() => {setModalIsOpen(true); setOperation("ADD")}}
      />
      <TodoList
        todoData={todoData}
        handleSetCurrentTodo={handleSetCurrentTodo}
        setOperation={setOperation}
      />
    </>
  );
};

export default Index;
