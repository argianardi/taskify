import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import TodoList from "./TodoList";

const Category = () => {
  const todosItem = useSelector((state) => state.todos.todosList);
  const [personalTodos, setPersonalTodos] = useState([]);
  const [educationTodos, setEducationTodos] = useState([]);
  const [businessTodos, setBusinessTodos] = useState([]);
  const [othersTodos, setOthersTodos] = useState([]);

  // State for controlling visibility of todos by its category
  const [activePersonal, setActivePersonal] = useState(false);
  const [activeEducation, setActiveEducation] = useState(false);
  const [activeBusiness, setActiveBusiness] = useState(false);
  const [activeOthers, setActiveOthers] = useState(false);

  // catch todo by its category
  useEffect(() => {
    // personal category
    const personalCategories = todosItem.filter(
      (item) => item.category === "personal"
    );
    setPersonalTodos(personalCategories);
    // education category
    const educationCategories = todosItem.filter(
      (item) => item.category === "education"
    );
    setEducationTodos(educationCategories);
    // business category
    const businessCategories = todosItem.filter(
      (item) => item.category === "business"
    );
    setBusinessTodos(businessCategories);
    // others category
    const othersCategories = todosItem.filter(
      (item) => item.category === "others"
    );
    setOthersTodos(othersCategories);
  }, [todosItem]);

  return (
    <div className="w-full lgl:w-[850px] h-[200px] bg-bodyColor flex flex-col md:flex-row items-center justify-start">
      {/*  active handle buttons to display all todos in each category  */}
      <div className="w-full md:w-1/6 h-full">
        <button
          onClick={() =>
            setActivePersonal(true) &
            setActiveEducation(false) &
            setActiveBusiness(false) &
            setActiveOthers(false)
          }
          className="categoryP"
        >
          Personal
        </button>
        <button
          onClick={() =>
            setActivePersonal(false) &
            setActiveEducation(true) &
            setActiveBusiness(false) &
            setActiveOthers(false)
          }
          className="categoryP"
        >
          Education
        </button>
        <button
          onClick={() =>
            setActivePersonal(false) &
            setActiveEducation(false) &
            setActiveBusiness(true) &
            setActiveOthers(false)
          }
          className="categoryP"
        >
          Business
        </button>
        <button
          onClick={() =>
            setActivePersonal(false) &
            setActiveEducation(false) &
            setActiveBusiness(false) &
            setActiveOthers(true)
          }
          className="categoryP"
        >
          Others
        </button>
      </div>

      {/* List of all todos from each category */}
      <div className="w-full md:w-5/6 h-full flex items-center overflow-y-scroll scrollbar-hide">
        <p
          className={`${
            activePersonal || activeEducation || activeBusiness || activeOthers
              ? "hidden"
              : "w-full text-base font-titleFont text-green-500 text-center font-medium tracking-wide"
          } `}
        >
          Click on the tab to choose your todos category
        </p>
        {/* active personal category */}
        {activePersonal && (
          <ul className="w-full h-[90%] flex flex-col items-center gap-2 px-2">
            {personalTodos.length > 0 ? (
              personalTodos.map((item) => (
                <TodoList todo={item} key={item.id} />
              ))
            ) : (
              <motion.li
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full text-lg flex justify-center items-center text-red-500 text-center font-semibold"
              >
                Personal todo list is empty!
              </motion.li>
            )}
          </ul>
        )}

        {/* active education category */}
        {activeEducation && (
          <ul className="w-full h-[90%] flex flex-col items-center gap-2 px-2">
            {educationTodos.length > 0 ? (
              educationTodos.map((item) => (
                <TodoList todo={item} key={item.id} />
              ))
            ) : (
              <motion.li
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full text-lg flex justify-center items-center text-red-500 text-center font-semibold"
              >
                {" "}
                Education todo list is empty!
              </motion.li>
            )}
          </ul>
        )}

        {/* active Business category */}
        {activeBusiness && (
          <ul className="w-full h-[90%] flex flex-col items-center gap-2 px-2">
            {businessTodos.length > 0 ? (
              businessTodos.map((item) => (
                <TodoList todo={item} key={item.id} />
              ))
            ) : (
              <motion.li
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full text-lg flex justify-center items-center text-red-500 text-center font-semibold"
              >
                Business todo list is empty!
              </motion.li>
            )}
          </ul>
        )}

        {/* active others category */}
        {activeOthers && (
          <ul className="w-full h-[90%] flex flex-col items-center gap-2 px-2">
            {othersTodos.length > 0 ? (
              othersTodos.map((item) => <TodoList todo={item} key={item.id} />)
            ) : (
              <motion.li
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full text-lg flex justify-center items-center text-red-500 text-center font-semibold"
              >
                Others todo list is empty!
              </motion.li>
            )}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Category;
