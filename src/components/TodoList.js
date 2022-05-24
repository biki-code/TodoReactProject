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
      <div className="flex flex-col w-4/6 m-auto">
        <div className="max-w-fit py-5">
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

        <div className="flex mt-4">
          <TodoItem
            legendData={"Done"}
            bgColor={"bg-white"}
            itemStatus={"done"}
          />
          <TodoItem
            legendData={"Not started"}
            bgColor={"bg-white"}
            itemStatus={"notStarted"}
          />
          <TodoItem
            legendData={"In progress"}
            bgColor={"bg-white"}
            itemStatus={"inProgress"}
          />
        </div>
      </div>
    </>
  );
};

export default TodoList;
