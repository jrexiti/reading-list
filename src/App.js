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
      <BookList onDelete={deleteBookById} books={books} onEdit={editBookById} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
