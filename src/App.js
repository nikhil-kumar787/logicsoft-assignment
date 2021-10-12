import "./App.css";
import Search from "./components/Search";
import { BrowserRouter, Route } from "react-router-dom";
import Book from "./screens/Book";

function App() {
  return (
    <BrowserRouter>
      <main>
        <Route path="/" component={Search} exact />
        <Route path="/book/:id" component={Book} />
      </main>
    </BrowserRouter>
  );
}

export default App;
