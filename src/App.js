import { useSelector } from "react-redux";
import Category from "./components/Category";
import Footer from "./components/Footer";
import InputForm from "./components/InputForm";

function App() {
  const todosItem = useSelector((state) => state.todos.todosList);
  return (
    <div
      className="w-full min-h-screen pt-4 font-bodyFont 
      bg-abstract
    text-white px-4 flex flex-col justify-center items-center gap-10"
    >
      {todosItem.length > 0 && <Category />}
      <div className="w-full lgl:w-[850px] h-full bg-bodyColor p-4 lgl:p-10 flex flex-col gap-10">
        <InputForm />
        <Footer />
      </div>
    </div>
  );
}

export default App;
