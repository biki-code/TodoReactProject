import TodoList from "../components/TodoList";
import Modal from "../components/Modal";
import { useState } from "react";

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
  const [operation, setOperation] = useState(null);

  const handleAddTodo = () => {
    console.log(currentTodo);

    if (JSON.stringify(currentTodo) === JSON.stringify(defaultTodo)) {
      alert(
        `The Todo element is not correct. \nTitle: ${currentTodo.title} \nDeadline: ${currentTodo.deadline} \nStatus: ${currentTodo.status}`
      );
      return;
    }

    setTodoData([...todoData, currentTodo]);

    // reset currentTodo after adding
    setCurrentTodo(defaultTodo);
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

  const handleModalCancel = () => {
    // reset currentTodo before closing the modal
    setCurrentTodo(defaultTodo);
    setModalIsOpen(false);
  };

  const handleModalAdd = () => {
    // reset currentTodo after adding a new todo
    handleAddTodo();
    setModalIsOpen(false);
  };

  const handleModalUpdate = () => {
    // reset currentTodo after updating a todo
    handleUpdateTodo();
    setModalIsOpen(false);
  };

  return (
    <>
      <Modal
        handleModalCancel={handleModalCancel}
        handleModalAdd={handleModalAdd}
        handleModalUpdate={handleModalUpdate}
        currentTodo={currentTodo}
        setCurrentTodo={setCurrentTodo}
        modalIsOpen={modalIsOpen}
        operation={operation}
      />

      <TodoList
        todoData={todoData}
        handleSetCurrentTodo={handleSetCurrentTodo}
        setOperation={setOperation}
        setModalIsOpen={setModalIsOpen}
      />
    </>
  );
};

export default Index;
