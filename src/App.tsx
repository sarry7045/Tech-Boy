import { Route, Routes } from "react-router-dom";
import HomePage from "./App/Home/HomePage";
import Upload from "./App/Upload/Upload";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/Upload" element={<Upload />}></Route>
      <Route path="*" element={<HomePage />}></Route>
    </Routes>
  );
}

export default App;
