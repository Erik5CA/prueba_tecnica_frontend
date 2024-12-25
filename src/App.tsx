import { Route, Routes } from "react-router-dom";
import "./App.css";
import ListUsers from "./pages/ListUsers";
import CreateUser from "./pages/CreateUser";
import EditUser from "./pages/EditUser";
import NavBar from "./components/NavBar";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          duration: 4000,
          style: {
            background: "#1a2b5e",
            color: "#fff",
            padding: "1rem",
          },
        }}
      />
      <NavBar />
      <Routes>
        <Route path="/" element={<ListUsers />} />
        <Route path="/create" element={<CreateUser />} />
        <Route path="/edit/:id" element={<EditUser />} />
      </Routes>
    </>
  );
}

export default App;
