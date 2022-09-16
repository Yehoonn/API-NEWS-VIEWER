import { Route, Routes } from "react-router-dom";
import NewsPage from "../Components/NewsPage";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<NewsPage />}></Route>
      <Route path="/:category" element={<NewsPage />}></Route>
    </Routes>
  );
}

export default App;
