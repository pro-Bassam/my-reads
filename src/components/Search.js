import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import BookCard from "./BookCard";
import { search } from "../service/BooksAPI";

const Search = ({ onChangeShelf, genres, myBooks }) => {
  const [query, setQuery] = useState("");
  const [allBooks, setAllbooks] = useState([]);

  const handelChange = ({ currentTarget: input }) => {
    setQuery(input.value);
  };

  useEffect(() => {
    const searchForBooks = async () => {
      if (query !== "") {
        const newBooks = await search(query.toLowerCase().trim());
        if (!newBooks.error) {
          newBooks.map((newBook) =>
            myBooks.forEach((book) =>
              newBook.id === book.id ? (newBook.shelf = book.shelf) : null
            )
          );
          setAllbooks(newBooks);
        } else setAllbooks([]);
      }
    };
    searchForBooks();
  }, [query]);

  return (
    <div>
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              autoFocus
              value={query}
              onChange={(e) => handelChange(e)}
              placeholder="Search by title, author, or ISBN"
            />
          </div>
        </div>
        {query === "" ? null : (
          <div className="search-books-results">
            <ol className="books-grid">
              {allBooks.map((book) => (
                <li key={book.id}>
                  <BookCard
                    genres={genres}
                    book={book}
                    onChangeShelf={onChangeShelf}
                  />
                </li>
              ))}
            </ol>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
