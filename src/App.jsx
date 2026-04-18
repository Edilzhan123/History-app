import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Topic from "./pages/Topic";
import TopicDetail from "./pages/TopicDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/topic/:periodId" element={<Topic />} />
        <Route path="/topic/:periodId/:topicId" element={<TopicDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
