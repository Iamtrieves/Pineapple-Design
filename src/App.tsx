import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/HomePage";
function App() {
  return (
    <div className="bg-black h-[100vh]">
      <MainLayout>
        <HomePage />
      </MainLayout>
    </div>
  );
}

export default App;
