import axios from "axios";
import React, { useEffect, useState } from "react";
const ListBooks = () => {
  const [books, setBooks] = useState([]);
  const fetchData = () => {
    axios
      .get("http://localhost:5000/api/books")
      .then((res) => {
        console.log(res.data);
        setBooks(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    console.log("use Effect Called");
    fetchData();
    return () => {
      console.log("Unmounting");
    };
  }, []);
  return (
    <div>
      <button onClick={fetchData}>Fetch Data</button>
      <h3>Books</h3>
      {books.map((b) => (
        <div>
          <h4>{b.title}</h4>
          <p>{b.author}</p>
        </div>
      ))}
    </div>
  );
};

export default ListBooks;
