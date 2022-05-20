import Form from "./Form";

const Modal = ({
  handleAddTodo,
  handleUpdateTodo,
  handleCloseModal,
  currentTodo,
  setCurrentTodo,
  modalIsOpen,
  operation,
  setOperation
}) => {
  return (
    <>
      {modalIsOpen ? (
        <Form
          handleAddTodo={handleAddTodo}
          handleUpdateTodo={handleUpdateTodo}
          handleCloseModal={handleCloseModal}
          currentTodo={currentTodo}
          setCurrentTodo={setCurrentTodo}
          operation={operation}
        />
      ) : null}
    </>
  );
};

export default Modal;
