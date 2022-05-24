import React from "react";

const TodoItem = ({
  itemStatus,
  todoTitle,
  todoDeadline,
  handleSetCurrentTodo,
  bgColor,
  legendData,
}) => {
  const statusToColor = {
    done: "bg-green-300",
    notStarted: "bg-red-300",
    inProgress: "bg-amber-300",
  };

  const statusColor = statusToColor[itemStatus] || statusToColor.notStarted;
  const ItemBgColor = bgColor || "bg-gray-300";

  return (
    <>
      <div
        className={`w-full h-fit px-8 py-2 m-auto ${ItemBgColor} mb-4 relative cursor-pointer`}
        onDoubleClick={handleSetCurrentTodo}
      >
        <div
          className={`${statusColor} h-full w-3 absolute left-0 top-0`}
        ></div>
        <div>
          {legendData ? (
            <div>{legendData}</div>
          ) : (
            <>
              <div className="font-bold">{todoTitle}</div>
              <div className="italic">Deadline: {todoDeadline}</div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default TodoItem;
