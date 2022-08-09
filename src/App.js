import { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Search from "./components/Search";
import Shelf from "./components/Shelf";
import { update, getAll } from "./service/BooksAPI";
import { getGenres } from "./service/fakeGenreService";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BookForm from "./components/BookForm";

function App() {
  const [books, setBooks] = useState([]);
  const [genres, setGenres] = useState([]);

  const handelChangeShelf = async (book, shelf) => {
    const res = await update(book, shelf);
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
      <NavBar />
      <Switch>
        <Route
          path="/search"
          render={(props) => (
            <Search
              genres={genres}
              onChangeShelf={handelChangeShelf}
              myBooks={books}
              {...props}
            />
          )}
        />
        <Route path="/books/:id" component={BookForm} />
        <Route
          path="/"
          render={(props) => (
            <Shelf
              allBooks={books}
              genres={genres}
              onChangeShelf={handelChangeShelf}
              {...props}
            />
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
