import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="relative h-120 bg-cover bg-center text-white bg-[url('./assets/images/572121ae-e646-4fea-9119-9f46e09dfc2e.jpg')]">
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="relative z-10">
        <Navbar />
      </div>
    </div>
  );
}

export default App;
