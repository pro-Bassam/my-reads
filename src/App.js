import "./App.css";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { getAll } from "./service/BooksAPI";
import Search from "./components/Search";
import Shelf from "./components/Shelf";
import { getGenres } from "./service/fakeGenreService";
import { update } from "./service/BooksAPI";

function App() {
  const [books, setBooks] = useState([]);
  const [genres, setGenres] = useState([]);

  const handelChangeShelf = async (book, shelf) => {
    const res = await update(book, shelf);
    console.log(res);
  };

  useEffect(() => {
    const getBooks = async () => {
      const allbooks = await getAll();
      setBooks(allbooks);
      const allGenres = await getGenres();
      setGenres(allGenres);
    };
    getBooks();
  }, [books]);

  return (
    <div className="app">
      <Routes>
        <Route
          path="/search"
          element={
            <Search
              genres={genres}
              onChangeShelf={handelChangeShelf}
              myBooks={books}
            />
          }
        />
        <Route
          path="/"
          element={
            <Shelf
              allBooks={books}
              genres={genres}
              onChangeShelf={handelChangeShelf}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
