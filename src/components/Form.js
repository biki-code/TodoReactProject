import Button from "./Button";

const Form = ({
  handleAddTodo,
  handleUpdateTodo,
  handleCloseModal,
  currentTodo,
  setCurrentTodo,
  operation,
}) => {
  const handleChange = (e) => {
    setCurrentTodo({ ...currentTodo, [e.target.name]: e.target.value });
  };

  const twInputclassNames = `
    block
    w-full
    px-4
    py-2
    text-base
    font-normal
    text-gray-700
    bg-white bg-clip-padding
    border border-solid border-gray-300
    rounded
    transition
    ease-in-out
    m-0
    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
  `;

  const twGroupingClassNames = `
    mb-3
  `;

  return (
    <>
      <form
        className="
        bg-gray-100
        flex justify-center
        flex-col
        w-1/2 m-auto
        px-4 py-2
        border-2
        rounded-md"
      >
        <span className="mb-2 text-base font-normal text-gray-700 px-1">
          Add new Todo
        </span>
        <div className={twGroupingClassNames}>
          <input
            className={twInputclassNames}
            name="title"
            type="text"
            placeholder="Title"
            value={currentTodo.title}
            onChange={handleChange}
          />
        </div>

        <div className={twGroupingClassNames}>
          <input
            className={twInputclassNames}
            name="deadline"
            type="text"
            placeholder="Deadline"
            value={currentTodo.deadline}
            onChange={handleChange}
          />
        </div>

        <div className={twGroupingClassNames}>
          <select
            className={`${twInputclassNames} cursor-pointer`}
            name="status"
            value={currentTodo.status}
            onChange={handleChange}
          >
            <option value="status" disabled>
              Status
            </option>
            <option value="notStarted">Not started</option>
            <option value="inProgress">In progress</option>
            <option value="done">Done</option>
          </select>
        </div>

        <div className={`flex justify-between ${twGroupingClassNames} mb-2`}>
          <Button
            buttonText={"Cancel"}
            twButtonBgColor={"bg-gray-600"}
            handleOnClick={handleCloseModal}
          />

          {operation === "ADD" ? (
            <Button
              buttonText={"Add"}
              twButtonBgColor={"bg-blue-600"}
              handleOnClick={handleAddTodo}
            />
          ) : (
            <Button
              buttonText={"Update"}
              twButtonBgColor={"bg-blue-600"}
              handleOnClick={handleUpdateTodo}
            />
          )}
        </div>
      </form>
    </>
  );
};

export default Form;
