import React, { useState, useEffect } from "react";
import { get } from "./../service/BooksAPI";
import "./style.css";

function BookForm(props) {
  const [data, setData] = useState({});
  const id = props.match.params.id;
  // TODO make a book card with all detals
  useEffect(() => {
    // console.log("hi");
    const getDataById = async () => {
      const foundedBook = await get(id);
      if (typeof foundedBook === "object") {
        setData(foundedBook);
      }
    };
    getDataById();
  }, [id]);

  return (
    <div>
      <h1>TODO make a book card with all detals</h1>
      <div className="card">
        {/* {console.log("data: ", data)}
        <img
          src={
            data.imageLinks.thumbnail !== undefined
              ? data.imageLinks.thumbnail
              : ""
          }
        /> */}
        Title: {data.title}
        <br />
        Authors:{" "}
        {data.authors !== undefined
          ? data.authors.map((auth) => <div key={auth}>{auth}</div>)
          : ""}
      </div>
    </div>
  );
}

export default BookForm;
