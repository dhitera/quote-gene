import Navbar from "./components/Navbar";
import Quote from "./components/Quotes";

const App = () => {
  return (
    <>
      <main className="bg-gradient-to-b from-gray-500 via-gray-800 to-black h-screen">
        <Navbar />
        <Quote />
      </main>
    </>
  );
};

export default App;
