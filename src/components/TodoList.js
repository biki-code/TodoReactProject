import TodoItem from "./TodoItem";

const TodoList = ({ todoData, handleSetCurrentTodo, setOperation }) => {
  return (
    <>
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
            }}
          />
        );
      })}
    </>
  );
};

export default TodoList;
