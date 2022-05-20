import React from "react";

const TodoItem = ({
  itemStatus,
  todoTitle,
  todoDeadline,
  handleSetCurrentTodo,
}) => {
  const statusToColor = {
    done: "bg-green-300",
    notStarted: "bg-red-300",
    inProgress: "bg-amber-300",
  };

  const statusColor = statusToColor[itemStatus] || statusToColor.notStarted;

  return (
    <>
      <div
        className="flex w-3/4 h-fit px-8 py-2 m-auto bg-gray-300 mb-4 relative cursor-pointer"
        onDoubleClick={handleSetCurrentTodo}
      >
        <div
          className={`${statusColor} h-full w-3 absolute left-0 top-0`}
        ></div>
        <div>
          <div className="font-bold">{todoTitle}</div>
          <div className="italic">Deadline: {todoDeadline}</div>
        </div>
      </div>
    </>
  );
};

export default TodoItem;
