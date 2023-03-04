import Footer from "./components/Footer";
import InputForm from "./components/InputForm";

function App() {
  return (
    <div className="w-full min-h-screen pt-4 font-bodyFont bg-gradient-to-t from-sky-600 via-sky-400 to-sky-300 text-white px-4 flex justify-center items-center">
      <div className="w-[850px] h-full bg-bodyColor p-10 flex flex-col gap-10">
        <InputForm />
        <Footer />
      </div>
    </div>
  );
}

export default App;
