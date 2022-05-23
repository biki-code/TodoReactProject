import Form from "./Form";

const Modal = ({
  handleModalCancel,
  handleModalAdd,
  handleModalUpdate,
  currentTodo,
  setCurrentTodo,
  modalIsOpen,
  operation,
}) => {
  return (
    <>
      {modalIsOpen ? (
        <div className="absolute flex h-screen w-screen bg-black/40 z-50">
          <Form
            handleModalCancel={handleModalCancel}
            handleModalAdd={handleModalAdd}
            handleModalUpdate={handleModalUpdate}
            currentTodo={currentTodo}
            setCurrentTodo={setCurrentTodo}
            operation={operation}
          />
        </div>
      ) : null}
    </>
  );
};

export default Modal;
