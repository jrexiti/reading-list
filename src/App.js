import { useState } from "react";
import BookCreate from "./components/BookCreate";
import "./index.css";

function App() {
  // *************** states ***************

  const [books, setbooks] = useState([]);

  // *************** handles ***************

  const createBook = (title) => {};

  return (
    <div>
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
