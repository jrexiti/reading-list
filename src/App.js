import { useState } from "react";
import BookCreate from "./components/BookCreate";
import "./index.css";
import BookList from "./components/BookList";

function App() {
  // *************** states ***************

  const [books, setbooks] = useState([]);

  // *************** handles ***************

  const createBook = (title) => {
    console.log("Need to add book with: ", title);
    const updatedBooks = [
      ...books,
      { id: Math.round(Math.random() * 9999), title },
    ];
    setbooks(updatedBooks);
  };

  const deleteBookById = (id) => {
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });
    setbooks(updatedBooks);
  };

  return (
    <div className="app">
      <BookList onDelete={deleteBookById} books={books} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
