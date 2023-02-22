import { useState } from "react";
import BookCreate from "./components/BookCreate";
import "./index.css";
import BookList from "./components/BookList";
import axios from "axios";

function App() {
  // *************** states ***************

  const [books, setbooks] = useState([]);

  // *************** functions ***************

  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:3001/books");
    setbooks(response.data);
  };

  const createBook = async (title) => {
    const response = await axios.post("http://localhost:3001/books", {
      title,
    });
    const updatedBooks = [...books, response.data];
    setbooks(updatedBooks);
  };

  const editBookById = (id, newTitle) => {
    const updatesBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: newTitle };
      }
      return book;
    });
    setbooks(updatesBooks);
  };

  const deleteBookById = (id) => {
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });
    setbooks(updatedBooks);
  };

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList onDelete={deleteBookById} books={books} onEdit={editBookById} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
