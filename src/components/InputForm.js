import React, { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { addTodos, removeTodos } from "../utils/redux/features/todoSlice";
import ErrorMessage from "./ErrorMessage";
import SuccessMessage from "./SuccessMessage";
import TodoList from "./TodoList";

const InputForm = () => {
  const dispatch = useDispatch();
  const todosItem = useSelector((state) => state.todos.todosList);
  const options = [
    { id: 1000, title: "categories" },
    { id: 1001, title: "personal" },
    { id: 1002, title: "business" },
    { id: 1003, title: "others" },
  ];

  const [todoValue, setTodoValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showError, setShowError] = useState(false);
  const [category, setCategory] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [showRemove, setShowRemove] = useState(false);

  // handle form submit todo
  const handleTodo = (e) => {
    e.preventDefault();

    // validate input
    if (todoValue === "") {
      setErrorMessage("Please write your todo!");
      setShowError(true);
      setShowSuccess(false);
    } else if (category === "") {
      setErrorMessage("Select a valid Category!");
      setShowError(true);
      setShowSuccess(false);
    } else if (category === "categories") {
      setErrorMessage("Select a valid Category!");
      setShowError(true);
      setShowSuccess(false);
    } else {
      dispatch(
        addTodos({
          id: Date.now(),
          todo: todoValue,
          category: category,
        })
      );
      setTodoValue("");
      setShowSuccess(true);
      setShowError(false);
      setSuccessMessage("Todo added Successfully!");
    }
  };

  // set timer to change showError and showSuccess became true (after 2 second) for hidden ErrorMessage Component
  useEffect(() => {
    const timer = setTimeout(() => {
      showError && setShowError(false);
      showSuccess && setShowSuccess(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [showError, showSuccess]);

  return (
    <div className="w-full flex flex-col gap-4">
      <div className="flex items-center gap-4 h-12">
        {/* Form Input */}
        <input
          onChange={(e) => setTodoValue(e.target.value)}
          value={todoValue}
          type="text"
          className="bg-bodyColor w-[80%] h-full border-[1px] border-gray-400 py-2 px-4 placeholder:text-gray-400 text-white text-base placeholder:text-sm tracking-wide rounded-md outline-none focus-visible:border-orange-600 hover:border-white"
          placeholder="Enter your Todo..."
        />

        {/* Categories */}
        <div className="w-[20%] h-full relative">
          <select
            onChange={(e) => setCategory(e.target.value)}
            className="w-full h-full text-center capitalize outline-none bg-bodyColor border-[1px] border-gray-400 px-1 cursor-pointer appearance-none rounded-md focus-visible:border-orange-600 hover:border-white"
          >
            {options.map((item) => (
              <option key={item.id}>{item.title}</option>
            ))}
          </select>
          <span className="absolute right-3 top-4">
            <FaChevronDown />
          </span>
        </div>
      </div>

      {/* Button */}
      <button
        onClick={handleTodo}
        className="w-full border-[1px] border-gray-400 hover:border-gray-200 duration-300 font-titleFont font-semibold tracking-wider text-gray-300 hover:text-orange-600 h-10 uppercase rounded-md"
      >
        Add Todo
      </button>

      {/* Todo List */}
      <div className="flex flex-col gap-4">
        <ul className="grid grid-cols-1 gap-4 border border-gray-600 shadow-todoShadow mt-6 p-4">
          {todosItem.length > 0 ? (
            todosItem.map((item) => <TodoList todo={item} key={item.id} />)
          ) : (
            <p className="text-center text-base text-yellow-500 font-titleFont font-medium">
              Your todo list is Empty!
            </p>
          )}
        </ul>

        {/* Button Remove All Todos, appears when the number of todo is more than one */}
        {todosItem.length > 1 && (
          <motion.button
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            onClick={() => setShowRemove(true)}
            className="w-40 h-8 text-sm font-titleFont text-orange-500 hover:text-red-500 font-semibold mx-auto bg-transparent border-[1px] border-gray-500 hover:border-red-500 duration-300"
          >
            Remove All Todos
          </motion.button>
        )}
      </div>

      {/* Show Error Message (while showError state is true) */}
      {showError && <ErrorMessage errorMessage={errorMessage} />}

      {/* Show Success Message (while showSuccess state is true) */}
      {showSuccess && <SuccessMessage successMessage={successMessage} />}

      {/* Question to be sure will delete all todos*/}
      {showRemove && (
        <div className="w-full h-screen fixed bg-bodyColor top-0 left-0 bg-opacity-60">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-8 py-4 bg-bodyColor border border-red-500 rounded-md z-50 flex flex-col gap-4 shadow-todoShadow">
            <p className="text-xl text-center font-medium text-red-500">
              Are you sure to{" "}
              <span className="font-semibold underline underline-offset-2 decoration-[1px]">
                remove
              </span>{" "}
              all the todos?
            </p>
            <div className="flex items-center gap-4 justify-center">
              <button
                onClick={() => dispatch(removeTodos()) & setShowRemove(false)}
                className="px-6 py-2 text-base font-titleFont text-orange-500 hover:text-red-500 font-semibold bg-transparent border-[1px] border-gray-500 hover:border-red-500 duration-300"
              >
                Yes
              </button>
              <button
                onClick={() => setShowRemove(false)}
                className="px-6 py-2 text-base font-titleFont text-orange-500 hover:text-green-500 font-semibold bg-transparent border-[1px] border-gray-500 hover:border-green-500 duration-300"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InputForm;
