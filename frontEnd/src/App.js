import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../src/pages/home/Home";
import AddArticle from "./pages/addArticle/AddArticle";
import Article from "./pages/article/Article";
import EditArticle from "./pages/editeArticle/EditArticle";
import Articles from "./pages/articles/Articles";
import Courses from "./pages/courses/Courses";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addArticle" element={<AddArticle />} />
          <Route path="/article/:articleId" element={<Article />} />
          <Route path="/article/*" element={<Article />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/editArticle/:articleId" element={<EditArticle/>} />
          <Route path="/courses" element={<Courses/>} />

        </Routes>
      </BrowserRouter>
    </>
    
  );
}

export default App;
