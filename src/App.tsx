import { Routes, Route } from "react-router-dom";
import UserList from "./UserList";
import UserDetail from "./UserDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<UserList />} />
      <Route path="/users/:id" element={<UserDetail />} />
    </Routes>
  );
}

export default App;
