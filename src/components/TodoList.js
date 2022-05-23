import TodoItem from "./TodoItem";
import Button from "./Button";

const TodoList = ({
  todoData,
  handleSetCurrentTodo,
  setOperation,
  setModalIsOpen,
}) => {
  return (
    <>
      <div className="flex flex-col">
        <div className="max-w-fit m-auto py-5">
          <Button
            buttonText={"Add a new todo"}
            twButtonBgColor={"bg-blue-600"}
            handleOnClick={() => {
              setModalIsOpen(true);
              setOperation("ADD");
            }}
          />
        </div>

        {todoData.map((todo, index) => {
          const { title, deadline, status } = todo;

          return (
            <TodoItem
              key={index}
              todoTitle={title}
              todoDeadline={deadline}
              itemStatus={status}
              handleSetCurrentTodo={() => {
                handleSetCurrentTodo(todo, index);
                setOperation("UPDATE");
                setModalIsOpen(true);
              }}
            />
          );
        })}
      </div>
    </>
  );
};

export default TodoList;
